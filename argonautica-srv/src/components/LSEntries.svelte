<script lang="ts">
    import { page } from '$app/stores';
    import LSEntry from "./LSEntry.svelte";
    export let entries;

    let path = "";
    page.subscribe((obj)=> {
        path = obj.url.pathname;
    });
</script>


<ul>
{#each entries as entry}
    <li>
        <LSEntry {entry}></LSEntry>
    </li>
{/each}
<p>guest@argonautica in ~{path} via argonautlabs.ca $ <span class="blinking-cursor">&#x2588;</span></p>
</ul>

<style>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: "Fira Code", monospace;
}

.blinking-cursor {
  animation: 1s blink step-end infinite;
  animation-timing-function: ease-in-out;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: whitesmoke;
  }
}
</style>