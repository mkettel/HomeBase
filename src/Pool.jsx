import React from 'react';
import './css/pool.css'
import Overlay from './Overlay.jsx'
import { useState } from 'react';




export default function Pool() {

  const poolVideos = [
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

  const [season, setSeason] = useState('season');


  // Setting season state
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


    {/* <div className="home-link">
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
        <h2 className='subject-title'>{poolVideos[1].title}</h2>
      </div>
      <div className="content-container-inner">
        <div className="content-container-video">
          <iframe width="560" height="315" src={poolVideos[1].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
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

    </div> */}



}

// Season Selector
export function SeasonSelector(props) {

  return <>
    <div className="home-link">
      <a href="/">House</a>
    </div>
    <div className="header-container">
      <h1 className='header-container-title'>Pool Season Selector</h1>
    </div>
    <div className="season-selector-container">
      <button className="season-button" onClick={() => props.setSeason('spring')}>spring</button>
      <button className="season-button" onClick={() => props.setSeason('summer')}> <span className='summer-span'>s</span><span className='summer-span'>u</span><span className='summer-span'>m</span><span className='summer-span'>m</span><span className='summer-span'>e</span><span className='summer-span'>r</span></button>
    </div>

  </>
}

// Summer Videos
export function SummerVideos(props) {


  return <>
    <h2>Videos for Summer Pool action</h2>
    <button onClick={() => props.setSeason('season')}>seasons</button>

  </>
}

// Spring Videos
export function SpringVideos(props) {


  return <>
    <h2>Videos for Spring Pool action</h2>
    <button onClick={() => props.setSeason('season')}>seasons</button>
  </>
}
