import { SerializableDate } from "@models/serializable-date";

export interface PostMetadata {
	id: number;
	slug: string;
	title: string;
	subtitle: string;
	tags: ReadonlyArray<string>;
	date: SerializableDate;
};