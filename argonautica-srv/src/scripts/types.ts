

/**
 * Represents the metadata for a post. slug should be the name of where the link points to if the type is "link".
 * linkURL should be the URL of the post if the type is not "link".
 */


export type PostSummary = {
    id: number 
    attributes: {
        title: string,
        content: string,
        updatedAt: string,
    }
}