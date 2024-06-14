import React from 'react'
import './VideoStyles.css'
import show_video from '../assets/video1.mp4'
import Service from '../Service'

const Video = () => {
    return (
        <div className='main-video'>
            <video autoPlay loop muted id='video'>
                <source src={show_video} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 style={{color:"red"}}>Welcome to AEI Applied Electronic Institute</h1>
                <p>The best place to launch your ideas.</p>
            </div>
        </div>
    )
}

export default Video