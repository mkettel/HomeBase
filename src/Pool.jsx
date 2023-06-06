import React from 'react';
import './css/pool.css'
import Overlay from './Overlay.jsx'




export default function Pool() {

  const videos = [
    {
      id: 1,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber'
    },
    {
      id: 2,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber'
    },
    {
      id: 3,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber'
    },
    {
      id: 4,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber'
    }
  ]
  console.log(videos[0].url);

  const video = () => videos.map((video) => {
    return (
      <div className="video" key={video.id}>
        <video
        controls
        height={250}
        width={150}
        >
          <source src={video.url} type="video/mp4" />
        </video>
      </div>
    )
  })

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
      {video && video()}
    </div>




  </>
}
