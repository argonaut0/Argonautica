<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from 'three';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    let renderer;
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    };

    const resize = () => {
    renderer.setSize(1600, 900)
    camera.aspect = 16 / 9;
    camera.updateProjectionMatrix();
    };

    let element;

    function initScene() {
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: element });
        resize();
        animate();
    }

    onMount(initScene);

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<canvas bind:this={element}></canvas>
