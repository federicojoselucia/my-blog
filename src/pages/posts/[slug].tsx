import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { getAllPostsSlugs, getPostFromSlug } from "@lib/mdx";
import { Post } from "@models";
import { ParsedUrlQuery } from "querystring";
import { PostBody } from "@components";

interface Props {
	post: Post;
}

interface Params extends ParsedUrlQuery {
	slug: string,
}

const PostPage: NextPage<Props> = ({ post }) => (
	<>
		<Head>
			<title>{post.title}</title>
		</Head>
		<h1 className="text-3xl font-bold underline">{post.title}</h1>
		<PostBody content={post.content}/>
	</>
)

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const slug = params!.slug;
	const post = await getPostFromSlug(slug);

	return {
		props: { post }
	};
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const paths = getAllPostsSlugs().map((slug) => ({ params: { slug } }))

	return {
		paths,
		fallback: false
	};
};

export default PostPage;