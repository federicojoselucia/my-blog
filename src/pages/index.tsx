import { GetStaticProps, NextPage } from "next/types";
import PostList from "src/components/post-list/post-list";
import { getAllPostsMetadata, PostMetadata } from 'src/lib/mdx'

interface Props {
  postsMetadata: Array<PostMetadata>;
}

const HomePage: NextPage<Props> = ({ postsMetadata }) => (
  <>
    <h1 className="text-text-accent text-3xl">Latest Posts</h1>
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