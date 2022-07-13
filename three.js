//three.js code

import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, 600 / 500, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#front-bg')
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(600, 500);
camera.position.setZ(30);

renderer.render( scene, camera);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial( { color: 0x08FDD8, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

scene.background = new THREE.Color(0x1D1D1D);

function threeAnimate(){
  requestAnimationFrame(threeAnimate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.003;

  renderer.render(scene, camera);
}

threeAnimate();

