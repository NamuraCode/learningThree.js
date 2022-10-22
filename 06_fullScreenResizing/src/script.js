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

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
// changes de values for dinamic sizes 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Listen the resize event whit js

window.addEventListener('resize', ()=>{
    console.log('resize')

    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // update the camera
    camera.aspect = sizes.width / sizes.height
    // update position matrix
    camera.updateProjectionMatrix()

    // update the renderer size
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// doble click event in render for go to fullscreen and leave fullscreen, don´t work in safari

// window.addEventListener('dblclick', ()=>{
//     if(!document.fullscreenElement){
//         canvas.requestFullscreen()
//         console.log('go fullscreen')
//     }else{
//         document.exitFullscreen()
//         console.log('leave fullscreen');
//     }
// })

// for work in safari the fullscreen 

window.addEventListener('dblclick', ()=>{

    const fullscreenElement =  document.fullscreenElement || document.webkitFullscreenElement
    if(!fullscreenElement){
        if(canvas.requestFullscreen){
            canvas.requestFullscreen()
            console.log('go fullscreen')
        }else if(canvas.webkitFullscreenElement){
            canvas.requestFullscreen()
        }
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
            console.log('leave fullscreen');
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
            console.log('leave fullscreen');
        }
    }
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// Quality renderer
// renderer.setPixelRatio(window.devicePixelRatio)
// Put other number you limit the range between 1 and 2 Math.min(start, finish)
// Put this in the resize event because diferent screen users
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
// const clock = new THREE.Clock()

const tick = () =>
{
    // const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// pixel ration 1 px in 2 pixel-ratio = 1 px x 4px, 3 pixel ratio = 1px x 9, is very hard for redering the computer, 2 is the limit

