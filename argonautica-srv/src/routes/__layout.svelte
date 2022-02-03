<!-- src/routes/__layout.svelte -->
<nav>
	<a href="/">Home</a>
	<a href="https://github.com/argonaut0">Github</a>
	<a href="/posts">Posts</a>
</nav>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');
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
