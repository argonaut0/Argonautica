<script lang="ts">
    export let entry;

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');

    p, a {
        font-family: "Fira Code", monospace;
    }
</style>

<p>
    {`${entry.type === "folder" ? "drwxr-xr-x" : "-rw-r--r--"}    1 argonaut0 argonautlabs ${Math.floor(1000 * Math.random())} ${entry.date.toLocaleDateString()}`}
    <a href="/#">{entry.name}</a>
</p>