import Link from "next/link";
import { PostMetadata } from "src/lib/mdx";

interface Props {
  postMetadata: PostMetadata
};

const Post = ({ postMetadata }: Props) => (
	<li key={postMetadata.slug}>
		<Link href={`/posts/${postMetadata.slug}`}>
			<a>
				<div>
					<h4 className="text-text-primary text-xl">{postMetadata.title}</h4>
					<h3 className="text-text-secondary text-base">{postMetadata.subtitle}</h3>
				</div>
			</a>
		</Link>
	</li>
);

export default Post;