import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { getAllTags, getPostsMetadataFromTag, PostMetadata } from "@lib/mdx";

interface Props {
    slug: string,
    postsMetadata: Array<PostMetadata>;
}

const TagPage: NextPage<Props> = ({ slug, postsMetadata }) => (
    <>
    <Head>
        <title>Tag: { slug }</title>
    </Head>
    <h1>Tag: { slug }</h1>
    </>
)

export const getStaticProps : GetStaticProps = async ({params}) => {
    const { slug } = params as { slug: string }
    const postsMetadata = getPostsMetadataFromTag(slug);

    return {
        props: {
            slug,
            postsMetadata: postsMetadata
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Array.from(getAllTags()).map((tag) => ({ params: { slug: tag }}))

    return {
        paths,
        fallback: false
    };
};

export default TagPage;