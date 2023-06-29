import { Trail, useMatcapTexture ,Center, Text3D, OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export default function Trails() {

  // animate the sphere that has the trail in random directions
    const sphere = useRef()
    useFrame((state, delta) => {
      const step = .5
      const t = state.clock.getElapsedTime() * step

      // get random number between 0 and 7 every 100 frames
      const r = Math.random() * 7

      // move the sphere in random directions
      sphere.current.position.x = Math.sin(t / 2) * 6
      sphere.current.position.y = Math.cos(t / 1.1) * 5
      sphere.current.position.z = Math.cos(t) * 4
    })

  return <>

    <Trail
      width={.5} // Width of the line
      color={'#65AFFF'} // Color of the line
      length={9} // Length of the line
      decay={1} // How fast the line fades away
      local={false} // Wether to use the target's world or local positions
      stride={0} // Min distance between previous and current point
      interval={1} // Number of frames to wait before next calculation
      target={sphere} // Optional target. This object will produce the trail.
      attenuation={(width) => width} // A function to define the width in each point along it.
      emissionRate={10} // How many particles will be emitted per frame
    >
    {/* If `target` is not defined, Trail will use the first `Object3D` child as the target. */}
    <mesh position={[3, 9, -10]} ref={sphere} scale={.02}>
      <sphereGeometry  />
      <meshStandardMaterial
      color={'#65AFFF'}
      roughness={1}
      metalness={1}
      specular={1}
      emissive={'#65AFFF'}
      emissiveIntensity={2}
      />
    </mesh>
    {/* You can optionally define a custom meshLineMaterial to use. */}
    {/* <meshLineMaterial color={"red"} /> */}
  </Trail>


  </>
}
