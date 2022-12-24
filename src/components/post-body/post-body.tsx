import { PostContent } from "@models";
import { MDXRemote } from "next-mdx-remote";

interface Props {
  content: PostContent
};

const components = { 
	h1: (props: any) => <h1 className="text-text-primary text-3xl font-bold underline" {...props} />,
	p: (props: any) => <p className="text-text-secondary" {...props} /> 
};

export const PostBody = ({ content }: Props) => 
	<MDXRemote {...content} components={components}/>;
