import path from "path";
import fs from "fs";
import yaml from 'js-yaml'

import { sync } from "glob";
import { serialize } from "next-mdx-remote/serialize";
import { Post, PostContent, PostMetadata } from "@models";

import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/atom-one-dark.css";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");
const MDX_EXT = ".mdx";
const FRONTMATTER_FENCE = "---"

interface RawPost {
	rawContent: string;
	rawMetadata: RawPostMetadata
	path: string
};

interface RawPostMetadata {
	id?: number;
	title?: string;
	subtitle?: string;
	tags?: Array<string>;
	date?: string;
};

/**
 * Returns all posts slugs (Based on file name)
 */
export const getAllPostsSlugs = (): Array<string> =>
	getAllPostsPaths()
		.map((postPath) => extractFileNameFromPath(postPath));

/**
 * Returns all posts metadata
 */
export const getAllPostsMetadata = (): Array<PostMetadata> =>
	getAllRawPosts()
		.map((rawPost) => getMetadataFromRawPost(rawPost));

/**
 * Returns requested post from its slug (Based on file name)
 */
export const getPostFromSlug = async (slug: string): Promise<Post> => {
	const rawPost = getRawPostFromSlug(slug);
	return getPostFromRawPost(rawPost);
};

/**
 * Returns valid post
 */
const getPostFromRawPost = async (raw: RawPost): Promise<Post> => {
	const metadata = getMetadataFromRawPost(raw);
	const content: PostContent = await serialize(raw.rawContent, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: "wrap" }],
				rehypeHighlight
			]
		},
		parseFrontmatter: true
	});

	return {
		content,
		...metadata
	};
}

/**
 * Returns valid post metadata
 */
const getMetadataFromRawPost = (raw: RawPost): PostMetadata => {
	if (!raw.rawMetadata.id)
		throw new Error(`Invalid post id. Path: ${raw.path}`);
	if (!raw.rawMetadata.title)
		throw new Error(`Invalid post title. Path: ${raw.path}`);
	if (!raw.rawMetadata.date)
		throw new Error(`Invalid post date. Path: ${raw.path}`);

	const postDate = new Date(raw.rawMetadata.date);

	return {
		id: raw.rawMetadata.id,
		slug: extractFileNameFromPath(raw.path),
		title: raw.rawMetadata.title,
		subtitle: raw.rawMetadata.subtitle ?? "",
		tags: raw.rawMetadata.tags ?? [],
		date: {
			year: postDate.getFullYear(),
			month: postDate.getMonth() + 1,
			day: postDate.getDate(),
			timestamp: postDate.getTime()
		}
	};
};

/**
 * Returns all raw posts
 */
const getAllRawPosts = (): Array<RawPost> =>
	getAllPostsPaths()
		.map((postPath) => getRawPostFromPath(postPath));

/**
 * Returns the raw post read from a filesystem path built using the post slug
 */
const getRawPostFromSlug = (slug: string): RawPost => {
	const postPath = buildPostPathFromFileName(slug);
	return getRawPostFromPath(postPath);
};

/**
 * Returns the raw post read from a filesystem path
 */
const getRawPostFromPath = (path: string): RawPost => {
	const rawContent = readRawContentFromPath(path);
	const rawMetadata = parseRawMetadataFromRawContent(rawContent);
	return {
		rawContent,
		rawMetadata,
		path
	};
};

/**
 * Returns the raw content read from a filesystem path
 */
const readRawContentFromPath = (path: string): string => 
	fs.readFileSync(path, "utf8");

/**
 * Returns the raw metadata parsed from the raw content
 */
const parseRawMetadataFromRawContent = (rawContent: string): RawPostMetadata => {
	const fenceLengthToSkip = FRONTMATTER_FENCE.length;
	const fenceEndIndex = rawContent.indexOf(FRONTMATTER_FENCE, fenceLengthToSkip);
	const frontmatter = rawContent.substring(fenceLengthToSkip, fenceEndIndex);
	return yaml.load(frontmatter) as RawPostMetadata;
}

/**
 * Returns the built post path using the posts directory and the file name
 */
const buildPostPathFromFileName = (fileName: string): string =>
	path.join(POSTS_DIRECTORY, `${fileName}${MDX_EXT}`);

/**
 * Returns the extracted file name from a path without the extension
 */
const extractFileNameFromPath = (postPath: string): string =>
	path.basename(postPath, MDX_EXT);

/**
 * Returns all posts filesystem paths in the current working directory
 */
const getAllPostsPaths = (): string[] =>
	sync(`${POSTS_DIRECTORY}/*${MDX_EXT}`);