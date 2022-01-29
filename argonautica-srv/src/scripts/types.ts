

/**
 * Represents the metadata for a post. slug should be the name of where the link points to if the type is "link".
 * linkURL should be the URL of the post if the type is not "link".
 */
export interface PostMeta {
    name: string;
    type: "folder" | "file" | "link";
    wordcount: number;
    date: Date;
    slug: string,
    linkURL: string, 
}

export type Post = {
    meta: PostMeta,
    content: string
}