import { PostMetadata } from "src/lib/mdx";
import Post from "./post";

interface Props {
  postsMetadata: Array<PostMetadata>
};

const PostList = ({ postsMetadata }: Props) => {
	const posts = postsMetadata.map((postMetadata) => 
		<Post postMetadata={postMetadata}/>
	);

	return (
		<ul>
			{posts}
		</ul>
	);
}

export default PostList;