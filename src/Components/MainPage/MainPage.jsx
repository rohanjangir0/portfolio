import React from 'react'
import './MainPage.css'

function MainPage() {
  return (
    <div className='main-page'>
        <h1 className='intro'>Hello, I'm</h1>
        <h1 className='my-name'>ROHAN <span>JANGIR</span></h1>
        <h5 className='subtitle'>A passionate Developer</h5>
        <p className='description'>
          I craft beautiful and functional digital experiences that make a difference. 
          Specializing in modern web technologies and creative problem-solving.
        </p>
        <div className='main-btns'>
            <button className='mywork'>View My Work</button>
            <a href="./Rohan_Resume.pdf" target='_blank'><button className='resume'>Download CV</button></a>
        </div>
    </div>
  )
}
export default MainPage
