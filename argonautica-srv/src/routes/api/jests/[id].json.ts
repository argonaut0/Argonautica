
/**
 * Mock Article generator
 */
export async function get({ params }) {
    return {
        body: {
            content: await (await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")).text()
        }
    }
}