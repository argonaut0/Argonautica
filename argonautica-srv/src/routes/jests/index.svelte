<script lang="ts">

import LSEntries from "../../components/LSEntries.svelte";


const entries = [
    {
        name: "This is a folder",
        type: "folder",
        wordcount: 432,
        date: new Date()
    },
    {
        name: "This is a file",
        type: "file",
        wordcount: 113,
        date: new Date()
    },
    {
        name: "This is another folder",
        type: "folder",
        wordcount: 632,
        date: new Date()
    },
    {
        name: "This is an external link",
        type: "link",
        wordcount: 0,
        date: new Date(),
        linkLocation: "github",
        linkURL: "https://github.com/argonaut0"
    }
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
