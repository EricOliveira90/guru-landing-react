import React from 'react'
import './hero.css'
import guru from '../images/guru.png'
import logo from '../images/logo.svg'

function Hero() {
  return (
    <header>
      <div className='top-space'></div>
      <div className='center-space'>
        <div className='focus-space'>
          <img src={guru} alt="guru" className='guru'></img>
          <div className='right-focus'>
            <div className='slogan'>
              <h1>OTIMIZE SEU JOGO COM A</h1>
            </div>
            <div className='logo'>
              <img src={logo} alt="logo" className='guru-logo'></img>
            </div>
          </div>
          
        </div>
      </div>
      <div className='top-space'></div>
    </header>
  )
}

export default Hero