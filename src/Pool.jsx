import React from 'react';
import './css/pool.css'
import Overlay from './Overlay.jsx'




export default function Pool() {

  const videos = [
    {
      id: 1,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber'
    }
  ]
  console.log(videos[0].url);

  return <>

    <a href="/">House</a>

    <div className="header-container">
      <div className="header">
        <div className="header-text">
          <h1>Pool & Hot Tub</h1>
        </div>
      </div>
    </div>

    <div className="video-container">
      <div className="video">
        <video
        controls
        height={400}
        width={250}
        aspectRatio={[4, 5]}
        >
          <source src={videos[0].url} type="video/mp4" />
        </video>
      </div>
    </div>




  </>
}
