import './style.css'
import * as THREE from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Cameras

// PerspectiveCamera( fieldOfView, aspectRatio, near, far )
// near = .1
// far = 100
// don´t use extreme values, because collapsed the depth of normals, diference between front and back
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// OrthographicCamera( left, right, top, bottom, near, far )
// use -1 in x left, 1 in x right, 1 in y top and -1 in y bottom
// whit the size parameters, can change the dimentions of canvas and modify the cube
// Fix the cube dimensions whit the aspect ratio

const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 100)
const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, .1, 100)


camera.position.x = 2
camera.position.y = 2
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime() / 2

    // Update objects
    mesh.rotation.y = elapsedTime;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

//cameras, types: 
// camera is a abstract class 
// 1 PrespectiveCamera 
// 2 ArrayCamera multiple cameras
// 3 CubeCamera "6 renders" three.js used this for materials and shadows and ligths
// 4 OrthograpicCamera, whitout perspective
// 5 StereoCamera "vr" "parallax"