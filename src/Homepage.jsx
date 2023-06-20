import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Sky } from '@react-three/drei'
import Overlay from './Overlay.jsx'


export default function Homepage() {

  return <>
    <div className="d-root">
      <Canvas
        camera={ {
            fov: 50,
            near: 0.1,
            far: 200,
            position: [ -4, 2, 14 ]
        } }
      >
        <Experience />

        <Sky distance={450000} sunPosition={[1, -1, 0]} inclination={0} azimuth={0.25}  />
      </Canvas>
      {/* Buttons and title */}
      <Overlay />
    </div>
  </>
}
