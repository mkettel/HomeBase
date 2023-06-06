import { Trail, useMatcapTexture ,Center, Text3D, OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import House from './House'
import Trails from './Trails'
import Overlay from './Overlay'



export default function Experience()
{
   const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)


    return <>

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* adding light looking at the house but subtle */}
      <ambientLight intensity={.1} />

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

      <Center>
        <House position={[0, - 1, 0]} scale={1} rotation={[0, Math.PI, 0]} />
      </Center>

    </>
}
