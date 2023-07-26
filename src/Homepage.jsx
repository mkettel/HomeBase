import './style.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Sky, Environment } from '@react-three/drei'
import Overlay from './Overlay.jsx'


export default function Homepage() {

  return <>
    <div className="d-root">
      <Canvas
        camera={ {
            fov: 50,
            near: 0.1,
            far: 200,
            position: [ -4, 4, 20 ]
        } }
      >

        <Experience />

        <Sky distance={450000} sunPosition={[8, .4, 3]} inclination={0} azimuth={0.05}  />
        <Environment
          files={[
            './envmap/farmenv/nx.jpg',
            './envmap/farmenv/ny.jpg',
            './envmap/farmenv/nz.jpg',
            './envmap/farmenv/px.jpg',
            './envmap/farmenv/py.jpg',
            './envmap/farmenv/pz.jpg',
          ]}
          />
      </Canvas>
      <Overlay />
    </div>
  </>
}
