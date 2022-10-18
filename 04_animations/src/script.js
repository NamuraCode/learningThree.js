import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Base
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// Rendering in the function whit window.requestAnimationFrame

// animation whit the time, create one object type date
// let time = Date.now()

// animate whit clock three.js object 
// const clock = new THREE.Clock()

// 4
// gsap

gsap.to(mesh.rotation, { duration:1, delay:1, y:6 } )

const tick = () =>
{   
    // 1
    // time current
    // const currentTime = Date.now() 
    // What time does it does wait for iteraction 
    // const deltaTime = currentTime -time
    // Set time whit the new time
    // time = currentTime
    // console.log(deltaTime);

    // 2
    // Here we can play whit object tranformations
    // rotation mesh in y and z whit the method math cos and sin
    // mesh.rotation.y += (Math.cos(1) / 6) /4 
    // mesh.rotation.z += (Math.sin(1) / 8) /4

    //3
    // const elapsedTime = clock.getElapsedTime()
    // the same but, whit the deltaTime
    // mesh.rotation.y += elapsedTime * .0002
    // mesh.rotation.z += elapsedTime * .0002
    // see what do it do Math.cos Math.sin
    // mesh.position.y = Math.cos(elapsedTime)
    // mesh.rotation.y = Math.cos(elapsedTime)
    // mesh.rotation.z = Math.sin(elapsedTime)
    // // i can do this whit the camera too
    // camera.position.y = Math.cos(elapsedTime)
    // camera.rotation.y = Math.cos(elapsedTime)
    // camera.rotation.z = Math.sin(elapsedTime)
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()