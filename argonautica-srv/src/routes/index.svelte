<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from 'three';
    import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
    import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

    const lightPos = { type: 'v3', value: new THREE.Vector3(3.0, 8.0, 2.0) };
    const vertShader = `
    uniform vec3 lightPos;
    out float vcolor;
    void main() {
        vec3 distanceVector = lightPos - vec3(modelMatrix * vec4(position, 1.0));
        vec3 modelNormal = mat3(inverse(transpose(modelMatrix))) * normal;
        vcolor = dot(modelNormal, distanceVector)/ (length(modelNormal) * length(distanceVector));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`

    const fragShader = `
    in float vcolor;
    void main() {
        gl_FragColor = vec4(vcolor, vcolor, vcolor, 1.0);
    }
    `

    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x262626 )
    const camera = new THREE.PerspectiveCamera(100, 16 / 9);
    const geometry = new THREE.IcosahedronGeometry(2);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            lightPos: lightPos
        },
        vertexShader: vertShader,
        fragmentShader: fragShader
    } );

    const loader = new FontLoader(); 

    loader.load( "fira-code-light.typeface.json", function ( font ) {

        const tgeometry = new TextGeometry( 'WebGL go Brrrrrreeerrerr', {
            font: font,
            size: 4,
            height: 2,
            curveSegments: 10,
            bevelEnabled: false,
        } );

        const text = new THREE.Mesh(tgeometry, material);
        text.position.x -= 5;
        text.position.y += 30;
        text.position.z -= 50;
        scene.add(text);
        
    } );

    //new THREE.MeshBasicMaterial({ color: 0xe5e5e5 });
    const cube = new THREE.Mesh(geometry, material);
    let iW, iH;
    let renderer;
    scene.add(cube);
    camera.position.z = 10;

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
