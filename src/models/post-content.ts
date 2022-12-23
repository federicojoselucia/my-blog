import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

export type PostContent = MDXRemoteSerializeResult<Record<string, unknown>>;
