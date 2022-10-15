// import './style.css'
import * as THREE from 'three'

// Canvas
const canvas2 = document.querySelector('canvas.webg2')
console.log(canvas2)

// Scene
const scene2 = new THREE.Scene()

/**
 * Objects group
 */

const group =  new THREE.Group()
scene2.add(group)

const cube1 =  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
group.add(cube1)



// AxesHelper for see the axis x y and z
const axesHelper = new THREE.AxesHelper(5)
// Add the helper to escene
scene2.add(axesHelper)

/**
 * Sizes
 */
const sizes2 = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera2 = new THREE.PerspectiveCamera(75, sizes2.width / sizes2.height)
camera2.position.z = 4
scene2.add(camera2)

/**
 * Renderer
 */
const renderer2 = new THREE.WebGLRenderer({
    canvas: canvas2
})
renderer2.setSize(sizes2.width, sizes2.height)
renderer2.render(scene2, camera2)