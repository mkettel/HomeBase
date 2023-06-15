import './style.css'
import { extend } from '@react-three/fiber'


export default function Overlay() {


  return <>

    <div className="pool-button">
      <a className='nav' href="/pool">Pool</a>
    </div>


    <div className="yard-button">
      <a className='nav' href="/pool">Yard</a>
    </div>

    {/* Description */}
    <div className="overlay-description">
      <p className='main-header' href="/pool">HomeBase</p>
    </div>





  </>
}
