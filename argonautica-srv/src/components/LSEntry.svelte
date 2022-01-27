<script lang="ts">
    export let entry;

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');

    p, a {
        font-family: "Fira Code", monospace;
    }
    
    a {
        color: yellowgreen;
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
</style>

<p>
    <span class="chmod">{entry.type === "folder" ? "drwxr-xr-x " : "-rw-r--r-- "}</span>
    1 <span class="usrgrp">argonaut0 argonautlabs</span>
    {Math.floor(1000 * Math.random())}
    <span class="date">{entry.date.toLocaleDateString()}</span>
    <a href="/#">{entry.name}</a>
</p>