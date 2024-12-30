import React from 'react'
import './AppDownlode.css'
import { assets } from '../../assets/assets'

const AppDownlode = () => {
  return (
    <div className='app-downlode' id='app-downlode'>
      <p>For Better Exprience Downlode <br />Foodies App</p>
      <div className="app-downlode-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownlode
