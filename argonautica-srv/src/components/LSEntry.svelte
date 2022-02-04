<script lang="ts">
    export let entry;

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');

    .line, a {
        font-family: "Fira Code", monospace;
    }
    
    .line {
        display: flex;
        gap: 15px;
    }
    
    .file {
        color: yellowgreen;
    }

    .folder {
        color: darkorange;
    }

    .link {
        color: deepskyblue;
    }

    .chmod {
        color: cadetblue;
    }

    .usrgrp {
        color: tomato;
    }

    .date {
        color:cornflowerblue
    }

    .wordcount {
        width: 90px;
    }
</style>

<div class="line">
    <span class="chmod">{
        "-rw-r--r-- "
        }</span>
    1 <span class="usrgrp">argonaut0 argonautlabs</span>
    <span class="wordcount">{entry.attributes.content.split(" ").length + " words"}</span>
    <span class="date">{new Date(entry.attributes.updatedAt).toLocaleDateString()}</span>
    <a href="posts/{entry.id}" class="file" target="_self">{
    entry.attributes.title
    }</a>
</div>