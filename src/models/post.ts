import { PostContent } from "@models/post-content";
import { PostMetadata } from "@models/post-metadata";

export interface Post extends PostMetadata {
	content: PostContent;
};