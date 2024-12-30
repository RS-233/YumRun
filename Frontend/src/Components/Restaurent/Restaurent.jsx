import React from 'react'
import './Restaurent.css'
import { assets, restaurent_list } from '../../assets/assets'

const Restaurent = () => {
  return (
    <div className='Restaurent'>
        <div className='Restaurent-heading'>Populars</div>
        <div className='Restaurent-sub-heading'><h3>Popular Restaurents  </h3><button>View All {'>'}</button></div>
        <div className='single-restaurent-box'>
            { restaurent_list.map((Name, index) => (
                <div key = {index} >
                    <div className='single-reataurent'>
                          <img src={Name.image} alt="" className='single-reataurent-img' />
                          <div className='name-box'><p>{Name.name}</p><div className='favourate'><img src={assets.favorite} alt="" /></div></div>
                          <div className='buy-now-box'><button>Order Now</button><div className='review'><img src={assets.star} alt="" />5</div></div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Restaurent
