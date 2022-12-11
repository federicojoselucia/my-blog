import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { getAllPostsSlugs, getMDXPostFromSlug, MDXPost } from "@lib/mdx";

interface Props {
    post: MDXPost;
}

const PostPage: NextPage<Props> = ({ post }) => (
    <>
        <Head>
            <title>{ post.metadata.title }</title>
        </Head>
        <h1 className="text-3xl font-bold underline">{ post.metadata.title }</h1>
    </>
)


export const getStaticProps : GetStaticProps = async ({params}) => {
    const { slug } = params as { slug: string };
    const post = await getMDXPostFromSlug(slug);

    return {
        props: { post }
    };
};

export const getStaticPaths : GetStaticPaths = async () => {
    const paths = getAllPostsSlugs().map((slug) => ({ params: { slug }}))

    return {
        paths,
        fallback: false
    };
};

export default PostPage;