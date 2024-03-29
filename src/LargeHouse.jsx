import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function LargeHouse(props) {
  const { nodes, materials } = useGLTF("/winter-casa-wider.glb");


  materials.Snow.color = new THREE.Color(0xffffff); // Set snow color to white
  materials.Snow.roughness = 0.9;
  materials.Snow.metalness = 0.2;

  // change house body color
  materials["Material.002"].color = new THREE.Color('#918C78'); // Set house body color to brown
  materials["Material.002"].roughness = .8;
  materials["Material.002"].metalness = 0;

  // Ground Snow
  materials["Snow.006"].roughness = .4;


  // House Rotation
  const house = useRef();
  useFrame(() => {
    // house.current.rotation.y += 0.00001;
  });

  // Click on ground to go to pool page
  const poolClick = () => {
    window.location.href = "/pool";
  }
  const yardClick = () => {
    window.location.href = "/yard";
  }

  // States
  const [hovered, setHovered] = useState(false);

  // Cursor change on hover to pointer
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered])

  return (
    <group ref={house} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={nodes.tree.material}
        position={[3.571, 0.236, 1.321]}
        rotation={[-0.064, -0.417, -0.085]}
        scale={0.813}
        onDoubleClick={yardClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves.geometry}
          material={nodes.leaves.material}
          onDoubleClick={yardClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001.geometry}
        material={nodes.tree001.material}
        position={[-3.001, 0.268, -1.313]}
        rotation={[-0.077, -0.259, -0.061]}
        onDoubleClick={yardClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves001.geometry}
          material={nodes.leaves001.material}
          onDoubleClick={yardClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree002.geometry}
        material={nodes.tree002.material}
        position={[2.922, 0.324, -1.801]}
        rotation={[-0.041, -0.186, -0.005]}
        scale={0.406}
        onDoubleClick={yardClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves002.geometry}
          material={nodes.leaves002.material}
          onDoubleClick={yardClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree003.geometry}
        material={nodes.tree003.material}
        position={[2.973, 0.274, 12.414]}
        rotation={[-0.088, -0.485, 0.06]}
        scale={0.813}
        onDoubleClick={yardClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves003.geometry}
          material={nodes.leaves003.material}
          onDoubleClick={yardClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree004.geometry}
        material={nodes.tree004.material}
        position={[-3.023, 0.238, 12.808]}
        scale={0.667}
        onDoubleClick={yardClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves004.geometry}
          material={nodes.leaves004.material}
          onDoubleClick={yardClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pole.geometry}
        material={materials.pole}
        position={[-2.047, 0.029, -3.544]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.092, -0.808, -0.076]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sign.geometry}
        material={materials.sign}
        position={[-2.06, 1.151, -3.991]}
        scale={[0.551, 0.448, 0.573]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.007"]}
        position={[-1.577, 1.282, -3.683]}
        rotation={[1.587, -0.099, -3.109]}
        scale={0.137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tile.geometry}
        material={materials["tile-color"]}
        position={[-0.018, 0.292, -1.825]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.302, -0.022, -0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tile001.geometry}
        material={materials["tile-color"]}
        position={[-0.018, 0.311, -2.577]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.302, -0.022, -0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tile002.geometry}
        material={materials["tile-color"]}
        position={[-0.124, 0.3, -3.278]}
        rotation={[-0.012, 0.086, 3.11]}
        scale={[-0.302, -0.022, -0.26]}
      />
      {/* Main Ground */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Snow.006"]}
        position={[0, 0.279, 0.026]}
        scale={[3.791, 6.239, 3.844]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall001.geometry}
          material={materials["Snow.001"]}
          position={[0.055, 0.031, 0.075]}
          scale={0.264}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.001"]}
        position={[-0.018, 2.282, -1.249]}
        rotation={[-1.7, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.001"]}
        position={[-1.284, 1.096, -0.011]}
        rotation={[0, 0, 1.635]}
        scale={0.278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.001"]}
        position={[1.311, 1.103, 0.003]}
        rotation={[0, 0, -1.632]}
        scale={0.272}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.001"]}
        position={[-0.009, 1.031, -1.194]}
        rotation={[-1.629, 0, 0]}
        scale={0.32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Material}
        position={[-0.009, 0.149, 8.312]}
        scale={[0.104, 0.053, 0.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        position={[0, 0.279, 0.045]}
        scale={[1.003, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0, 0.279, 0.023]}
        scale={[1.001, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall002.geometry}
          material={materials["Snow.002"]}
          position={[-0.016, 2.194, -0.004]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.003"]}
        position={[0, 0.279, 0]}
        scale={[1.002, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall005.geometry}
          material={materials["Snow.005"]}
          position={[-0.02, 2.804, -0.123]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[0, 0.279, 0]}
        scale={[1.002, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall003.geometry}
          material={materials["Snow.003"]}
          position={[1.286, 1.162, 0.024]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[0, 0.279, 0.017]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall004.geometry}
          material={materials["Snow.004"]}
          position={[1.279, 1.161, 0.001]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[-0.021, 2.293, -1.23]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.002"]}
        position={[0, 0.279, 0.009]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall006.geometry}
          material={materials["Snow.006"]}
          position={[0.587, 2.88, 0.706]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Snow.006"]}
        position={[0.023, -0.679, 8.603]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.831, 1, 3.754]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall007.geometry}
          material={materials.Snow}
          position={[-0.089, 1.021, 0.037]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.266, 1, 0.207]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.TerrazzoSlab028_2K}
        position={[0.023, -0.679, 8.603]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.831, 1, 3.754]}
        onDoubleClick={poolClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
}

useGLTF.preload("/winter-casa-wider.glb");
