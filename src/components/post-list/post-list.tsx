import { PostListItem } from "@components/post-list/post-list-item";
import { Divider } from "@components/divider";
import { PostMetadata } from "@models";

interface Props {
  postsMetadata: Array<PostMetadata>
};

export const PostList = ({ postsMetadata }: Props) => {
	const posts = postsMetadata.map((postMetadata, index) => 
		<li key={postMetadata.id} className="space-y-6">
			<PostListItem postMetadata={postMetadata}/>
			{(index < postsMetadata.length - 1) && 
				<Divider/>
			}
		</li>
	);

	return (
		<ul className="space-y-6">
			{posts}
		</ul>
	);
}