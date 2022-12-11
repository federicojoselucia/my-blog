import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";

const POSTS_PATH = path.join(process.cwd(), "posts");
const MDX_EXT = ".mdx";

export interface Post {
	content: string;
	metadata: PostMetadata;
};

export interface PostMetadata {
	id: number;
	slug: string;
	title: string;
	subtitle: string;
	tags: Array<string>;
	date: string;
};

export interface MDXPost{
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	metadata: PostMetadata;
};

export const getAllPostsSlugs = (): Array<string> =>
	getAllPostsPaths()
		.map((postPath) => getSlugFromPostPath(postPath));

export const getAllPostsMetadata = (): Array<PostMetadata> =>
	getAllPosts()
		.map((post) => post.metadata);

export const getAllTags = (): Set<string> =>
	new Set(getAllPosts()
		.map((post) => post.metadata.tags)
		.flat());

export const getPostsMetadataFromTag = (tag: string): Array<PostMetadata> =>
	getAllPosts()
		.filter((post) => post.metadata.tags.includes(tag))
		.map((post) => post.metadata);

export const getMDXPostFromSlug =  async (slug: string): Promise<MDXPost> => {
	const { content, metadata } = getPostFromSlug(slug);
	const source = await serialize(content);

	return {
		source,
		metadata
	};
};

const getPostFromSlug = (slug: string): Post => {
	const postPath = getPathFromPostSlug(slug);
	return getPostFromPath(postPath);
};

const getAllPosts = (): Array<Post> =>
	getAllPostsPaths()
		.map((postPath) => getPostFromPath(postPath))
		.sort((x, y) =>  new Date(y.metadata.date).getTime() - new Date(x.metadata.date).getTime());


const getPostFromPath = (postPath: string): Post => {
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);
	const slug = getSlugFromPostPath(postPath);

	return {
		content,
		metadata: {
			id: data.id,
			slug: slug,
			title: data.title ?? slug,
			subtitle: data.subtitle ?? "",
			tags: (data.tags ?? []).sort(),
			date: data.date
		}
	};
};

const getPathFromPostSlug = (slug: string): string =>
	path.join(POSTS_PATH, `${slug}${MDX_EXT}`);

const getSlugFromPostPath = (postPath: string): string =>
	path.basename(postPath, MDX_EXT);

const getAllPostsPaths = (): string[] =>
	sync(`${POSTS_PATH}/*${MDX_EXT}`);