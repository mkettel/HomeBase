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
      url: 'https://www.youtube.com/embed/BKxCOasoqsc',
      title: 'Backwashing the Pool Pump'
    },
    {
      id: 3,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Pool Pump Breaker'
    },
    {
      id: 4,
      url: './videos/pool/cl-floating-chamber.mp4',
      title: 'Pool Pump Pressure'
    }
  ]
  console.log(videos[0].url);

  // Maps Through videos array and returns a video element for each video
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

    <div className="content-container-outer">
      <div className="content-container center-title">
        <h2 className='subject-title'>{videos[1].title}</h2>
      </div>
      <div className="content-container-inner">
        <div className="content-container-video">
          {/* <video
            className='video-player'
            controls
            height={250}
            width={250}
          >
            <source src={videos[1].url} type="video/mp4" />
          </video> */}
          <iframe width="560" height="315" src={videos[1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
        </div>
        <div className="content-container-description">
          <div className="description-summary">
            <p>The floating chlorine chamber is used to slowly release the chlorine into the pool over time and can hold up to 6 tablets at one time</p>
          </div>
          <div className="description-steps">
            <ol>
              <li>Open the floating chlorine chamber</li>
              <li>Place 6 chlorine tablets into the chamber as needed</li>
            </ol>
          </div>
        </div>
      </div>

    </div>


  </>
}
