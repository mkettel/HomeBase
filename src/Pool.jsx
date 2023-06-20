import React, { useLayoutEffect } from 'react';
import './css/pool.css'
import Overlay from './Overlay.jsx'
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";



// MAIN COMPONENT FOR THE POOL PAGE
export default function Pool() {

  const [season, setSeason] = useState('season');

  // GSAP ANIMATIONS FOR SEASONS PAGE
  const seasonButtonRef = useRef();
  const headerRef = useRef();

  useLayoutEffect( () => {
    let ctx = gsap.context(() => {

      // Seasons Button fade effect
      gsap.from('.season-button', {
        opacity: 0,
        ease: 'power1.inOut',

        stagger: 0.5
      })
    }, seasonButtonRef)

    // Header effect
    gsap.from('.header-container-title', {
      y: -50,
      yoyo: true,
      ease: 'back',
      duration: 1
    }, headerRef)

    return () => ctx.revert();
  }, [])

  // Sets the state of the season
  if (season === 'season') {
    return (
      <SeasonSelector headerRef={headerRef} seasonButtonRef={seasonButtonRef} season={season} setSeason={setSeason} />
    )
  } else if (season === 'summer') {
    return (
      <SummerVideos headerRef={headerRef} seasonButtonRef={seasonButtonRef} season={season} setSeason={setSeason} />
    )
  } else if (season === 'spring') {
    return (
      <SpringVideos season={season} setSeason={setSeason} />
    )
  }
}


// SEASON SELECTOR PAGE 1---------------------------------------------------------
export function SeasonSelector(props) {

  return <>
    <div className="home-link">
      <a  href="/">House</a>
    </div>
    <div ref={props.headerRef} className="header-container">
      <h1 className='header-container-title'>Select Your Pool Season</h1>
    </div>
    <div ref={props.seasonButtonRef} className="season-selector-container">
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


// SPRING POOL VIDEOS PAGE------------------------------------------------------
export function SpringVideos(props) {

  const headerRef = useRef();

  useLayoutEffect( () => {
    let ctx = gsap.context(() => {

      // Seasons Button fade effect
      gsap.from('.header-container-title', {
        y: -50,
        yoyo: true,
        ease: 'back',
        duration: 1
      })
    }, headerRef)

    return () => ctx.revert();
  }, [])

  return <>
    <div className="page-container">
      <button className='seasons-back-button' onClick={() => props.setSeason('season')}>Back to Seasons</button>

    <div ref={headerRef}  className="header-container">
      <h1 className='header-container-title'>Spring Pool & Hot Tub Videos</h1>
    </div>
    <p>Under Construction Check Back Soon</p>
    <button onClick={() => props.setSeason('season')}>Back to Seasons</button>
  </div>
  </>
}

// SUMMER VIDEOS PAGE-----------------------------------------------------------
export function SummerVideos(props) {


  const summerPoolVideos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/9VUAWGzlDsk',
      title: 'Floating Chlorine Chamber',
      summary: 'The chamber can hold up to 6 tablets and will slowly release chlorine into the pool to keep the ph lower.'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/dFaJQLNz4s0',
      title: 'Backwashing the Pool Pump',
      summary: 'Once the pump reaches a pressure of 20 lbs you must backwash. Take the blue hose and keep FLAT to avoid pressure build up and run out to the tube on the side yard.'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/FZxjm10uZfw',
      title: 'Backwashing Start',
      steps: ['Turn off pump', 'Move selector clockwise to backwash', 'Turn pump on', 'Discharge for 1 min or so']
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/QZypPj09LRM',
      title: 'Pump In-line Filter',
      summary: 'After backwashing, you can clean the filter using high pressure water. Fill up the basin with water and seal the top back up then restart your pump. Do this after each backwash.'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/LS7lhEOAIkc',
      title: 'Using the Pool Robot',
      summary: 'Throw the robot in with plenty of slack on the cable. Turn the robot on with the power button on the box. It will run for 2 hours. Do it once per day in spring and early summer.'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/SA7y3CsX_C4',
      title: 'Ceaning the Robot',
      summary: 'Pop off the filter cover. If they are dirty just rinse with the hose on a lighter setting to protect the fabric of the filter to get it all cleaned up and ready to go.'
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/vwXOUYcozJI',
      title: 'Pool Breaker Box',
      summary: 'Down is OFF, Up is ON. Shut the pump off for a few hours during the hottest hours of the day to save pump lifetime and electric cost.'
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/h82QoSTausM',
      title: 'Hot Tub Drain & Refill',
      summary: 'Shut off power to the breaker next to the hot tub and connect the hose to the hose attachment. Drag the hose out to the side yard to drain. You can use the time to check the filter and cartriges and replace or clean as needed. Turn the power back on after refilled.'
    }
  ]
    // summer page header animation
    const headerRef = useRef();

    useLayoutEffect( () => {
      let ctx = gsap.context(() => {

        gsap.from('.header-container-title', {
          y: -50,
          yoyo: true,
          ease: 'back',
          duration: 1
        })
      }, headerRef)

      return () => ctx.revert();
    }, [])

  return <>
    <button
    className='seasons-back-button'
    onClick={() => props.setSeason('season')}>
      Back to Seasons
    </button>

    <div ref={headerRef} className="header-container">
      <h1 className='header-container-title'>Summer Pool & Hot Tub Videos</h1>
    </div>

    <VideoPlayer summerPoolVideos={summerPoolVideos} />

  </>
}

export function VideoPlayer(props) {

  // const videoPlayerRef = useRef();

  // // Video Card Animation for page
  // useLayoutEffect( () => {
  //   let ctx = gsap.context(() => {

  //     // Seasons Button fade effect
  //     gsap.from('.content-container-card', {
  //       opacity: 0,
  //       delay: .5,
  //       stagger: .3
  //     })
  //   }, videoPlayerRef)

  //   return () => ctx.revert();
  // }, [])

  return <>

  {/* Video Component */}
  <div className="content-container-outer">
    <div className="content-container-layout">
      {props.summerPoolVideos.map((video) => (
        <div className="content-container-card">
          <h2 className='video-title center'>{video.title}</h2>
          <iframe
          key={video.id}
          className='video'
          width="100%"
          height="315"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen>
          </iframe>
          {video.summary && (
            <p className='center'>{video.summary}</p>
          )}
          {video.steps && (
            <ol>
              {video.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  </div>
  </>
}
