<script context="module" lang="ts">
    import { DB_URL } from "../scripts/constants";


	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const url = `${DB_URL}/api/posts`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
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

import LSEntries from "../components/LSEntries.svelte";
export let posts;

</script>

<div class="col">
    <div class="elem">
        <LSEntries entries={posts.data}></LSEntries>
    </div>
</div>

<style>
    .col {
        background-color: #262626;
        min-height: 100vh;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content:  center;
        align-items: center;
    }
</style>
