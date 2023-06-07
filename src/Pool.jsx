import React from 'react';
import './css/pool.css'
import Overlay from './Overlay.jsx'




export default function Pool() {

  const videos = [
    {
      id: 1,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Floating Chlorine Chamber',
      description: 'The chamber can hold up to 6 tablets of chlorine'
    },
    {
      id: 2,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Post Party & Rain',
      description: 'After a rain it is very important to add bicarbonate to the pool to raise the alkalinity'
    },
    {
      id: 3,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Pool Pump Breaker',
      description: 'The pool pump breaker is located in the pump fence and should be shut off when it is in the heat of the day '
    },
    {
      id: 4,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Pool Pump Pressure',
      description: 'Need to keep the pressure between 12-15psi'
    }
  ]
  console.log(videos[0].url);

  const video = () => videos.map((video) => {
    return (
      <div className="video" key={video.id}>
        <h2>{video.title}</h2>
        <video
        className='video-player'
        controls
        height={250}
        width={250}
        >
          <source src={video.url} type="video/mp4" />
        </video>
        <p className='description'>{video.description}</p>
      </div>
    )
  })

  return <>

    <div className="home-link">
      <a href="/">House</a>
    </div>

    <div className="header-container">
      <div className="header">
        <div className="header-text">
          <h1>Pool & Hot Tub</h1>
        </div>
      </div>
    </div>

    <div className="pool-section">
      <div className="pool-section_title">
        <h2>Pool Chores</h2>
      </div>
      <div className="video-list">
        {video()}
      </div>

    </div>


  </>
}
