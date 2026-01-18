const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

const canvas = document.getElementById("webgl")
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 4

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const geometry = new THREE.SphereGeometry(1.5, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: 0x88ccff,
  metalness: 0.8,
  roughness: 0.2
})

const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

const light = new THREE.PointLight(0xffffff, 2)
light.position.set(5, 5, 5)
scene.add(light)

gsap.to(sphere.rotation, {
  y: Math.PI * 4,
  scrollTrigger: {
    scrub: 1
  }
})

function animate() {
  sphere.rotation.y += 0.003
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()
