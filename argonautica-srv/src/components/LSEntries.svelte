<script lang="ts">
    import LSEntry from "./LSEntry.svelte";
    export let entries;
</script>


<ul>
{#each entries as entry}
    <li>
        <LSEntry {entry}></LSEntry>
    </li>
{/each}
<p>guest@argonautica in ~ via argonautlabs.ca $ <span class="blinking-cursor">&#x2588;</span></p>
</ul>

<style>
ul {
    list-style-type: none;
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
    color: #000000;
  }
}
</style>