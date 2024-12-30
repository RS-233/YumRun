import React from 'react'
import './Slider.css'
import { menu_list } from '../../assets/assets'

const Slider = () => {


    const colors = ['#d97273', '#6e21fd', '#46ff3eea', '#ff7d12ea'];

  return (
    <div className='Slider'>
      <div className='header-content-bottom'>
          <div className='left-slider-arrow'>
            <div className='left-box'></div>
            <div className='left-slider-arrow-1'></div>
            <div className='left-slider-arrow-2'><button className='left-arrow-button'>P</button></div>
            <div className='left-slider-arrow-3'></div>
            <div className='bottom-slider-arrow'></div>
          </div>
          <div className='right-slider-arrow'>
            <div className='left-box'></div>
            <div className='left-slider-arrow-1'></div>
            <div className='left-slider-arrow-2'><button className='right-arrow-button'>N</button></div>
            <div className='left-slider-arrow-3'></div>
            <div className='bottom-slider-arrow'></div>
          </div>
          <div className='header-content-bottom-main'>
            {menu_list.map((menu_list, index) => (
                <div key={index} className='single-product'>
                  <div className='single-product-image'><img src={menu_list.menu_image} alt="" style={{ borderColor: colors[index % colors.length] }}  /></div>
                  <div className='single-product-box' style={{ backgroundColor: colors[index % colors.length] }}>
                    <div className='single-product-name'>{menu_list.menu_name}</div>
                    <div className='single-product-favourate'>
                        <div className='buy-now-button'>Buy now</div>
                        <div>H</div>
                    </div>
                  </div>
                </div>
            ))

            }
          </div>
        </div>
    </div>
  )
}

export default Slider
