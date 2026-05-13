const container = document.getElementById('three-container');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

container.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 1);

const material = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    wireframe: true,
    transparent: true,
    opacity: 0.5
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x818cf8,
    transparent: true,
    opacity: 0.8
});

const particlesMesh = new THREE.Points(
    particlesGeometry,
    particlesMaterial
);

scene.add(particlesMesh);
camera.position.z = 3;

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    particlesMesh.rotation.y += 0.001;

    mesh.rotation.x += mouseY * 0.05;
    mesh.rotation.y += mouseX * 0.05;

    renderer.render(scene, camera);
}

window.onload = animate;

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );
});