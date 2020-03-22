import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function createScene(element: HTMLDivElement | null) {
    if (element) {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, element.clientWidth/element.clientHeight, 0.1, 1000 );
        var canvas = document.createElement( 'canvas' );
        var context = canvas.getContext( 'webgl2', { alpha: false } );
        if (context) {
            var renderer = new THREE.WebGLRenderer( { canvas: canvas, context: context } );
            renderer.setSize( element.clientWidth, element.clientHeight );
            const controls = new OrbitControls( camera, renderer.domElement );
            controls.addEventListener( 'change', () => renderer.render(scene,camera)); // use if there is no animation loop
            controls.minDistance = 0;
            controls.maxDistance = 10
            controls.target.set( 0, 0, - 0.2 );
            controls.update();

            var light1 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
            light1.position.set( 100, 100, 100 ).normalize();
            scene.add( light1 );

            var light3 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
            light3.position.set( -100, 100, 100 ).normalize();
            scene.add( light3 );

            var light2 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
            light2.position.set( 100, -100, -100 ).normalize();
            scene.add( light2 );

            var light4 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
            light4.position.set( -100, -100, -100 ).normalize();
            scene.add( light4 );

            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            element.appendChild( renderer.domElement );
            return {
                scene,
                renderer,
                camera
            }
        }
    }
    return undefined;
}

function ThreeViewer({className}:{className?: string}) {

    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const viewer = createScene(ref.current);
        let onWindowResize: () => void;

        if (viewer) {
            const {scene,camera,renderer} = viewer;
            camera.position.z = 2;
            var loader = new GLTFLoader();
            const render = () => {
                renderer.render(scene,camera);
            }
            loader.load( process.env.PUBLIC_URL + "/3d/DamagedHelmet.gltf", function ( gltf ) {
                scene.add( gltf.scene );
                render(); 
            }, undefined, function ( error ) {
                console.error( error );
            });

            onWindowResize = () => {

                const element = ref.current; 

                if (element) {

                    camera.aspect = element.clientWidth / element.clientHeight;
                    camera.updateProjectionMatrix();
        
                    renderer.setSize( element.clientWidth, element.clientHeight );
                    render();
                }
    
            }

            window.addEventListener("resize", onWindowResize);


			render();
        }

        return () => {
            if (viewer) {
                viewer.scene.remove();
            }
            if (onWindowResize) {
                window.removeEventListener("resize", onWindowResize);
            }
        }
    },[]);

    return (
        <div className={className} ref={ref}/>
    )


}

export default ThreeViewer;
