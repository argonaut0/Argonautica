<script context="module" lang="ts">
    import * as qs from "qs";


	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
        const query = qs.stringify({
            fields: ["title", "updatedAt"],
        }, {
            encodeValuesOnly: true,
        });

		const url = `http://localhost:1337/api/posts?${query}`;
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

import LSEntries from "../../components/LSEntries.svelte";
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
        height: 100vh;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content:  center;
        align-items: center;
    }
</style>
