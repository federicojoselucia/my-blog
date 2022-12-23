import { GetStaticProps, NextPage } from "next/types";
import { PostList } from "@components";
import { getAllPostsMetadata } from "@lib/mdx";
import { PostMetadata } from "@models";

interface Props {
  postsMetadata: Array<PostMetadata>;
}

const HomePage: NextPage<Props> = ({ postsMetadata }) => (
  <>
    <h1 className="text-text-accent text-2xl font-extrabold tracking-tight mb-6">Latest Posts</h1>
    <PostList postsMetadata={postsMetadata}/>
  </>
);

export const getStaticProps : GetStaticProps = async () => {
  const postsMetadata = getAllPostsMetadata().slice(0, 9);
  return {
    props: { postsMetadata }
  };
};

export default HomePage;