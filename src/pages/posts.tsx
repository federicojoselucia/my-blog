import { GetStaticProps, NextPage } from "next/types";
import { getAllPostsMetadata, PostMetadata } from '@lib/mdx'
import { PostList } from "@components";

interface Props {
  postsMetadata: Array<PostMetadata>;
}

const PostsPage: NextPage<Props> = ({ postsMetadata }) => (
  <>
    <PostList postsMetadata={postsMetadata}/>
  </>
);

export const getStaticProps : GetStaticProps = async () => {
  const postsMetadata = getAllPostsMetadata().slice(0, 9);
  return {
    props: { postsMetadata }
  };
};

export default PostsPage;