
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function House(props) {
  const { nodes, materials } = useGLTF("/winter-casa-everything.glb");

  materials.Snow.color = new THREE.Color(0xffffff); // Set snow color to white
  materials.Snow.roughness = 0.9;
  materials.Snow.metalness = 0.2;

  // change house body color
  materials["Material.002"].color = new THREE.Color('#918C78'); // Set house body color to brown
  materials["Material.002"].roughness = 1;


  // House Rotation
  const house = useRef();
  useFrame(() => {
    house.current.rotation.y += 0.001;
  });

  // Click on ground to go to pool page
  const poolClick = () => {
    window.location.href = "/pool";
  }

  // States
  const [hovered, setHovered] = useState(false);

  // Cursor change on hover to pointer
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <>
    <group ref={house} {...props} dispose={null}>
      {/* Ground */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Snow}
        scale={4.78}
      >
        {/* snow on the ground */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall001.geometry}
          material={materials["Snow.001"]}
          roughness={0.5}
          metalness={0}
          position={[0.05, 0.03, 0.08]}
          scale={0.26}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.001"]}
        position={[-0.02, 2, -1.25]}
        rotation={[-1.7, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.001"]}
        position={[-1.34, 0.82, -0.01]}
        rotation={[0, 0, 1.64]}
        scale={0.28}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.001"]}
        position={[1.31, 0.82, 0]}
        rotation={[0, 0, -1.63]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.001"]}
        position={[-0.01, 0.75, -1.19]}
        rotation={[-1.63, 0, 0]}
        scale={0.32}
      />
      {/* Main House Body */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        // make a popup that says house when you hover over it
        onClick={poolClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall002.geometry}
          material={materials["Snow.002"]}
          position={[-0.02, 2.19, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.003"]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall005.geometry}
          material={materials["Snow.005"]}
          position={[-0.02, 2.8, -0.12]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall003.geometry}
          material={materials["Snow.003"]}
          position={[1.29, 1.16, 0.02]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall004.geometry}
          material={materials["Snow.004"]}
          position={[1.28, 1.16, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[-0.02, 2.01, -1.23]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.002"]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall006.geometry}
          material={materials.Snow}
          position={[0.59, 2.88, 0.71]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001.geometry}
        material={nodes.tree001.material}
        position={[-3, -0.01, -1.31]}
        rotation={[-0.08, -0.26, -0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves001.geometry}
          material={nodes.leaves001.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={nodes.tree.material}
        position={[2.64, -0.04, 1.32]}
        rotation={[-0.06, -0.42, -0.08]}
        scale={0.81}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves.geometry}
          material={nodes.leaves.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree002.geometry}
        material={nodes.tree002.material}
        position={[2.92, 0.04, -1.8]}
        rotation={[-0.04, -0.19, 0]}
        scale={0.41}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves002.geometry}
          material={nodes.leaves002.material}
        />
      </mesh>
    </group>
    {/* // adding point light for door and windows */}
    <pointLight position={[0.05, 0.01, 1]} intensity={0.3} color={'#F4D58D'}/>
    </>
  );
}

useGLTF.preload("/winter-casa-everything.glb");
