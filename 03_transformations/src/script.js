import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
})
const mesh = new THREE.Mesh(geometry, material)
// Move objects
// mesh.position.x= 0
// mesh.position.y= 1
// mesh.position.z= 1
// Other form for set the position is using the method .set(x, y, z)
mesh.position.set(0.9, -0.6, 1)
// Freezing the location of the object 3d
mesh.position.normalize()
// Then console.log
console.log(mesh.position.length())
// Know the distance between two objects
// console.log(mesh.position.distanceTo())

//Scale objects in three.js
mesh.scale.x = .5
mesh.scale.y = .9
mesh.scale.z = 1
// Is the same this method
// Mesh.scale.set( x, y, z)

// Rotation objects in three.js
// Rotation is in EULER
mesh.rotation.x = .5
mesh.rotation.y = Math.PI / 2
mesh.rotation.z = 1
// is the same this method
// If i want a rotation complete in one axis, i nedd put the "pi" number
// mesh.rotation.set( x, y, z)

//Change the order axis before of rotations setup
mesh.rotation.reorder("ZXY")

scene.add(mesh)

// AxesHelper for see the axis x y and z
const axesHelper = new THREE.AxesHelper(5)
// Add the helper to escene
scene.add(axesHelper)

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
camera.position.z = 4
// know the distance
console.log(mesh.position.distanceTo(camera.position))
scene.add(camera)

// Look at, for center the camera in one object pre selected
// For the center of the scene in a new object vector3  new THREE.Vector3(x, y, z)
camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)