import React from 'react'
import './survey.css'
import chibi from '../images/chibi.png'

function Survey(props) {
  return (props.trigger) ? (
    <div className='transparency'>
        <div className='popup'>
            <img src={chibi} alt="logo" className='guru-logo'></img>
        </div>
    </div>
  ) : "";
}

export default Survey