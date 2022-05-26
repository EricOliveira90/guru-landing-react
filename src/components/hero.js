import React from 'react'
import './hero.css'
import guru from '../images/guru.png'
import logo from '../images/logo.png'

function Hero() {
  return (
    <header>
      <div className='top-space'></div>
      <div className='center-space'></div>
      <div className='focus-space'>

        <div className='guru'>
          <img src={guru} alt="guru" width="300"></img>
        </div>
        
        <div className='right-focus'>
          <div className='slogan'>
            <h1>OTIMIZE SEU<br></br>JOGO COM A</h1>
          </div>
          <div className='logo'>
            <img src={logo} alt="logo" className='guru-logo'></img>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Hero