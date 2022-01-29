<!-- src/routes/__layout.svelte -->
<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/jests">Jests</a>
</nav>

<slot></slot>

<style>
    nav {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        background-color: #262626;
    }
    a {
        font-family: "Fira Code", monospace;
        color: whitesmoke;
    }
</style>
