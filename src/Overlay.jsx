import './style.css'
import { extend } from '@react-three/fiber'


export default function Overlay() {


  return <>

    <div className="pool-button">
      <a className='norm nav' href="/pool">Pool</a>
    </div>


    <div className="yard-button">
      <a className='norm nav' href="/yard">Yard</a>
    </div>

    {/* Header */}
    <div className="overlay-description">
      <p className='main-header'>HomeBase</p>
    </div>

    {/* Contact */}
    <div className="contact-button">
      <a className='norm nav' href="/contact">Contact</a>
    </div>

    {/* Description */}
    <div className="description">
      <p className='norm' href="/contact">Use buttons below or double-click your desired feature to access videos</p>
    </div>

  </>
}
