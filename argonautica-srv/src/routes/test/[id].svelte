<script context="module" lang="ts">

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {

			return {
				props: {
					id: params.id
				}
			};


	}
</script>

<script lang="ts">
    export let id;

</script>
    
<div class="col">
    <div class="elem">
        <p>Your slug is: {id}</p>
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
        font-family: "Fira Code", monospace;
    }
</style>

