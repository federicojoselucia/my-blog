import Link from "next/link";
import { PostMetadata } from "@lib/mdx";
import { Chip } from "@components/chip";

interface Props {
	postMetadata: PostMetadata
};

export const PostListItem = ({ postMetadata }: Props) => (
	<Link href={`/posts/${postMetadata.slug}`}>
		<a>
			<div className="space-y-2">
				<h4 className="text-text-primary text-xl tracking-tight font-bold">{postMetadata.title}</h4>
				<h3 className="text-text-secondary text-base tracking-wider font-thin">{postMetadata.subtitle}</h3>
				<Tags tags={postMetadata.tags} />
			</div>
		</a>
	</Link>
);

interface TagsProps {
	tags: Array<string>
};

const Tags = ({ tags }: TagsProps) => {
	if (tags.length <= 0)
		return null;

	const chips = tags.map(tag => <Chip text={tag} />)
	return (
		<div className="flex flex-row space-x-2">
			{chips}
		</div>
	)
};