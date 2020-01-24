import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import groundImg from './textures/2.jpg';

// Render with sizes
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Append canvas
document.body.appendChild(renderer.domElement);

// Init scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcce0ff);

// Init camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 300);
scene.add(camera);

// Init control
const controls = new OrbitControls(camera, renderer.domElement);
const gridXZ = new THREE.GridHelper(100, 10, new THREE.Color(0xff0000), new THREE.Color(0xffffff));
controls.maxDistance = 300;
controls.minDistance = 150;
controls.maxPolarAngle = 1.5;
controls.minPolarAngle = .1;
controls.enableDamping = true;
controls.dampingFactor = .25;
scene.add(gridXZ);

// Init ground
const ground = new THREE.PlaneBufferGeometry(100, 100);
const texture = new THREE.TextureLoader().load(groundImg);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(8,8);
const groundTexture = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, side: THREE.DoubleSide });
const groundContainer = new THREE.Mesh(ground, groundTexture);
groundContainer.rotation.x = Math.PI/2;
scene.add(groundContainer);

// Init wall
const leftGeometry = new THREE.BoxGeometry(1, 30, 30);
const leftMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const leftWall = new THREE.Mesh(leftGeometry, leftMaterial);
leftWall.position.y = 15;
leftWall.position.x = -10.5;
leftWall.position.z = -15;
scene.add(leftWall);

const rightGeometry = new THREE.BoxGeometry(1, 30, 30);
const rightMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const rightWall = new THREE.Mesh(rightGeometry, rightMaterial);
rightWall.position.y = 15;
rightWall.position.x = 10.5;
rightWall.position.z = -15;
scene.add(rightWall);

const backGeometry = new THREE.BoxGeometry(20, 30, 1);
const backMaterial = new THREE.MeshBasicMaterial({ color: 0x538886 });
const backWall = new THREE.Mesh(backGeometry, backMaterial);
backWall.position.y = 15;
backWall.position.x = 0;
backWall.position.z = -30.5;
scene.add(backWall);

const topGeometry = new THREE.BoxGeometry(16, 1, 5);
const topMaterial = new THREE.MeshBasicMaterial({ color: 0xBFA47D });
const topWall = new THREE.Mesh(topGeometry, topMaterial);
topWall.position.y = 25;
topWall.position.x = 0;
topWall.position.z = -28;
scene.add(topWall);

const topUnderGeometry = new THREE.BoxGeometry(16, 1, 5);
const topUnderMaterial = new THREE.MeshBasicMaterial({ color: 0xBFA47D });
const toUnderWall = new THREE.Mesh(topUnderGeometry, topUnderMaterial);
toUnderWall.position.y = 20;
toUnderWall.position.x = 0;
toUnderWall.position.z = -28;
scene.add(toUnderWall);

// Display scene
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
