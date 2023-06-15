import React from 'react';
import './css/yard.css'
import Overlay from './Overlay.jsx'
import { useState } from 'react';


export default function Yard() {


  const [season, setSeason] = useState('season');

  // Setting season state for proper component render
  if (season === 'season') {
    return (
      <SeasonSelector season={season} setSeason={setSeason} />
    )
  } else if (season === 'summer') {
    return (
      <SummerVideos season={season} setSeason={setSeason} />
    )
  } else if (season === 'spring') {
    return (
      <SpringVideos season={season} setSeason={setSeason} />
    )
  }
}

// Season Selector
export function SeasonSelector(props) {

  return <>
    <div className="home-link">
      <a href="/">House</a>
    </div>
    <div className="header-container">
      <h1 className='header-container-title'>Select Your Yard Season</h1>
    </div>
    <div className="season-selector-container">
      <button className="season-button" onClick={() => props.setSeason('spring')}> <span className='summer-span'>s</span>
      <span className='summer-span'>p</span>
      <span className='summer-span'>r</span>
      <span className='summer-span'>i</span>
      <span className='summer-span'>n</span>
      <span className='summer-span'>g</span>
      </button>
      <button className="season-button" onClick={() => props.setSeason('summer')}> <span className='summer-span'>s</span>
      <span className='summer-span'>u</span>
      <span className='summer-span'>m</span>
      <span className='summer-span'>m</span>
      <span className='summer-span'>e</span>
      <span className='summer-span'>r</span>
      </button>
    </div>
  </>
}


// Spring Videos to add with other video object
export function SpringVideos(props) {

  return <>
    <div className="page-container">
      <button className='seasons-back-button' onClick={() => props.setSeason('season')}>Back to Seasons</button>

    <div className="header-container">
      <h1 className='header-container-title'>Spring Yard Videos</h1>
    </div>
    <p>Under Construction Check Back Soon</p>
    <button onClick={() => props.setSeason('season')}>Back to Seasons</button>
  </div>
  </>
}

// Summer Videos
export function SummerVideos(props) {

  const summerPoolVideos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/9VUAWGzlDsk',
      title: 'Floating Chlorine Chamber',
      summary: 'The chamber can hold up to 6 tablets and will slowly release chlorine into the pool to keep the ph lower'
    }
  ]

  return <>
    <button className='seasons-back-button' onClick={() => props.setSeason('season')}>Back to Seasons</button>

    <div className="header-container">
      <h1 className='header-container-title'>Summer Yard Videos</h1>
    </div>

    <VideoPlayer summerPoolVideos={summerPoolVideos} />

  </>
}

export function VideoPlayer(props) {
  console.log(props.summerPoolVideos.map((video) => video.title));

  return <>

  {/* Video Component */}
  <div className="content-container-outer">
    <div className="content-container-layout">
      {props.summerPoolVideos.map((video) => (
        <div className="content-container-card">
          <h2 key={video.id} className='video-title center'>{video.title}</h2>
          <iframe
          className='video'
          width="100%"
          height="315"
          src={video.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
          </iframe>
          {video.summary && (
            <p className='center'>{video.summary}</p>
          )}
        </div>
      ))}
    </div>
  </div>
  </>
}
