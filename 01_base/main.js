console.log(THREE)
// Get canvas for rendering
const canvas = document.querySelector(".webgl")
// scene
const scene = new THREE.Scene()
// Red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color: "#ff0000"
})
// Add who paramet geometry and material
const mesh = new THREE.Mesh(geometry, material)
// Add mesh to scene
scene.add(mesh)
const sizes = {
    width: 800,
    height: 600
}
//Camera, (field of view, sizes.width / sizes.height (Aspect ratio = sizes:{ width, height }))
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height )
// move camera to see the cube
camera.position.z = 3
scene.add(camera)
console.log(canvas)
// rendering in canvas ({ canvas: canvas })
const renderer =  new THREE.WebGLRenderer({
    canvas: canvas
})
// seter sizes for camera 
renderer.setSize( sizes.width, sizes.height)
// rendering the scene, if i don´t have this, my screen is transparent.
renderer.render(scene, camera)

