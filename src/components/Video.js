import React from 'react'
import './video.styles.css'
import spaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type ='video/mp4' />
        </video>
        <div className='content'>
            <h1 className='hero-head'>Galaxy.Travel</h1>
            <p>World's first space travel</p>
            <div className='buttons'>
                <Link className='btn' to='/training'>Training</Link>
                <Link className='btn-light' to='/contact'>Launch</Link>
            </div>
        </div>

    </div>
  )
}

export default Video