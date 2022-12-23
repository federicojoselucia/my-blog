import Link from "next/link";
import { PostMetadata } from "@lib/mdx/mdx";
import { Chip } from "@components/chip";

interface Props {
	postMetadata: PostMetadata
};

export const PostListItem = ({ postMetadata }: Props) => (
	<div className="space-y-4">
		<Link href={`/posts/${postMetadata.slug}`}>
			<a className="space-y-2">
				<h4 className="text-text-primary text-xl tracking-tight font-bold">{postMetadata.title}</h4>
				<h3 className="text-text-secondary text-base tracking-wider font-thin">{postMetadata.subtitle}</h3>
			</a>
		</Link>
		<Tags tags={postMetadata.tags} />
	</div>

);

interface TagsProps {
	tags: Array<string>
};

const Tags = ({ tags }: TagsProps) => {
	if (tags.length <= 0)
		return null;

	const chips = tags.map(tag => <Chip key={tag} text={tag} />)
	return (
		<div className="flex flex-row space-x-2">
			{chips}
		</div>
	)
};