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


<LSEntries {entries}></LSEntries>
