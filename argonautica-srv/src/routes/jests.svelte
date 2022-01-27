<script lang="ts">

import LSEntries from "../components/LSEntries.svelte";


const entries = [
    {
        name: "This is a folder",
        type: "folder",
        date: new Date()
    },
    {
        name: "This is a file",
        type: "file",
        date: new Date()
    },
    {
        name: "This is another folder",
        type: "folder",
        date: new Date()
    },
]
</script>

<div class="col">
    <div class="elem">
        <LSEntries {entries}></LSEntries>
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
