import { OrbitControls } from '@react-three/drei'
import { useRef, Suspense, useEffect, useState } from 'react'
import House from './House'
import Placeholder from './Placeholder'
import { LargeHouse } from './LargeHouse'



export default function Experience()
{
    // Resizing for Mobile
    const [houseScale, setHouseScale] = useState(1.2)
    const [housePosition, setHousePosition] = useState([0, 0, 5])

    useEffect(() => {
      function handleResize() {
        const { innerWidth } = window;
        const isMobile = innerWidth <= 768; // Adjust the breakpoint for mobile devices
        const scale = isMobile ? .9 : 1.3; // Adjust the scale values for mobile
        const position = isMobile ? [0, 0, 3] : [0, 0, 5]
        setHouseScale(scale);
        setHousePosition(position);
      }
      window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    return <>

      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault autoRotate />

      {/* adding light looking at the house but subtle */}
      <ambientLight intensity={.2} />
      <pointLight intensity={.5} position={[0, 0.6, 7.2]} color={'yellow'} />
      <pointLight intensity={.5} position={[0, 0.6, -3.2]} color={'blue'} />

      <Suspense fallback={ <Placeholder position={[0, -.5, 0]} scale={[2, 2, 2]} /> }>
          <LargeHouse position={housePosition} scale={houseScale} rotation={[0, Math.PI, 0]} />
      </Suspense>


    </>
}
