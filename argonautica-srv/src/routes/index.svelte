<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import * as THREE from 'three';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x262626 )
    const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
    const geometry = new THREE.DodecahedronGeometry;
    const material = new THREE.MeshBasicMaterial({ color: 0xe5e5e5 });
    const cube = new THREE.Mesh(geometry, material);
    let iW, iH;
    let renderer;
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    let rs = 0;

    const resize = () => {
        renderer.setSize(iW, iH)
        camera.aspect = iW / iH;
        camera.updateProjectionMatrix();
        console.log(`${rs++} ${iW} ${iH}`);
    };

    let element;

    function initScene() {
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: element });
        resize();
        animate();
    }

    onMount(initScene);

</script>

<svelte:window on:resize={resize} bind:innerWidth={iW} bind:innerHeight={iH}/>
<canvas bind:this={element}></canvas>
