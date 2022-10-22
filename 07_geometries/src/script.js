import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()




// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1)

// The class geometry 
// has many built methods, translate, rotate, normalize, etc.
// BoxGeometry, PlaneGeometry, CircleGeometry, ConeGeometry, CylinderGeometry, RingGeometry, 
// TorusGeometry, TorusKnotGeometry, DodecahedronGeometry, OctahedronGeometry, TetrahedronGeometry,
// IconsahedronGeometry, SphereGeometry, ShapeGeometry, TubeGeometry, ExtrudeGeometry, latheGeometry,
// TextGeometry

// Box
// width, height, depth, widthSegments, heightSegments and depthSegments
// const geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
// 1 = 2 triangles per face
// 2 = 8 triangles per face
// we can´t see these triangles

// Create plane whit float32Array method, in three.js used 3 vertex
// const positions = new Float32Array(9)

// // Cube
// //  Firts vertice
// position[0] = 0 /* x */
// position[1] = 0 /* y */
// position[2] = 0 /* z */

// //  Second vertice
// position[3] = 0
// position[4] = 1
// position[5] = 0

// //  Three vertice
// position[6] = 1
// position[7] = 0
// position[8] = 0

// other for that we can set the plane
// const positionsArray = new Float32Array([
//     0, 0, 0,
//     0, 1, 0,
//     1, 0, 0
// ])

// convert the positions in attibutes for send to geometry whit bufferAttribute, new THREE.BufferAttribute(positions, numberComponentMiFaces)
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
// create BufferGeometry whit empty attributes
// const geometry =  new THREE.BufferGeometry()
// set the attributes for geometries geometry.setAttribute(string === 'position', positionsAttribute)
// geometry.setAttribute('position', positionsAttribute)

// Create bunch of random triangles
const geometry = new THREE.BufferGeometry()
const count = 1000 
// count multiply * 3 * 3 because this is a matrix to create the triangle, table 3 * 3 x y and z
const positionsArray =  new Float32Array(count * 3 * 3)
 for (let i = 0; i < count * 3 * 3; i ++){
    positionsArray[i] = (Math.random() - 0.5) * 2
 }
const positionsAttribute =  new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
// We can set the index that born the faces index : BufferAttributes




const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// material propieties
// wireframe : true 
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe : true  })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()