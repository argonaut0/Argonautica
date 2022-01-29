<script context="module" lang="ts">

	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export async function load({ error, status }) {

        return {
            props: {
                error: error,
                status: status
            }
        };
	}
</script>

<script lang="ts">
    export let error;
    export let status;

</script>
    
<div class="col">
    <div class="elem">
        <p>Error {status} - {error.message}</p>
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
