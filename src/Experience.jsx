import { Trail, useMatcapTexture ,Center, Text3D, OrbitControls, MeshTransmissionMaterial, PresentationControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useRef, Suspense } from 'react'
import House from './House'
import Trails from './Trails'
import Placeholder from './Placeholder'
import { LargeHouse } from './LargeHouse'



export default function Experience()
{
   const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    return <>

      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      {/* adding light looking at the house but subtle */}
      <ambientLight intensity={.2} />
      <directionalLight intensity={1} position={[0, 0, 0]} />

      {/* Extra 3d Text (not used currently) */}
      <Text3D
      font='./fonts/helvetiker_regular.typeface.json'
      size={.75}
      height={.2}
      position={[-2, 2, 0]}
      curveSegments={12}
      bevelEnabled
      bevelThickness={.15}
      bevelSize={.03}
      bevelOffset={0}
      bevelSegments={5}
      >
          <meshMatcapMaterial matcap={matcapTexture}  />
      </Text3D>

      <Trails />

      <Suspense fallback={ <Placeholder position={[0, -.5, 0]} scale={[2, 2, 2]} /> }>

          <LargeHouse position={[0, 0, 5]} scale={1.2} rotation={[0, Math.PI, 0]} />

      </Suspense>


    </>
}
