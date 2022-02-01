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
        entry.type === "folder" ?
        "drwxr-xr-x " :
        entry.type === "file" ?
        "-rw-r--r-- " :
        "lrwxrwxrwx "
        }</span>
    1 <span class="usrgrp">argonaut0 argonautlabs</span>
    <span class="wordcount">{entry.wordcount + " words"}</span>
    <span class="date">{entry.date.toLocaleDateString()}</span>
    <a href={entry.linkURL} class={entry.type} target={entry.type === "link" ? "_blank" : "_self"}>{
    entry.type === "link" ?
    `${entry.name} -> ${entry.linkLocation}`:
    entry.name
    }</a>
</div>