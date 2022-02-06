<script context="module" lang="ts">
	import { DB_URL } from "../../scripts/constants";

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = `${DB_URL}/api/posts/${params.id}`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					post: (await res.json()).data,
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
<script lang="ts">
	import { marked } from "marked";
	export let post;
	console.log(post);

	let content = marked.parse(post.attributes.content);
</script>

<div class="row">
	<div class="col">
		{@html content}
	</div>
</div>

<style>
    .row {
        background-color: #262626;
        min-height: 100vh;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content:  center;
        align-items: center;
    }
	.col {
		max-width: 50vw;
		text-align: justify;
		
	}
	
</style>
<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
		* {
			font-family: "Fira Code", sans-serif;
		}

		img {
			max-height: 100vh;
			display: block;
			padding-top: 4vh;
			margin-left: auto;
			margin-right: auto;
		}

		figcaption {
			background-color: #111;
			color: #fff;
			font: italic smaller sans-serif;
			padding: 2vh;
			text-align: center;
			margin-bottom: 4vh;
		}
	</style>
</svelte:head>