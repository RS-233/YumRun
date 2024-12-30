import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const Fooditem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className='food-name'><p>{name}</p><div className='food-favourat'><img src={assets.favorite} alt="" /></div></div>
            <div className='food-desc'><p>{description}</p></div>
            <div className='food-price'><p className='f-price'>₹ {price} /-</p><div className='food-rating'><img src={assets.star} alt="" />5</div></div>
        </div>
      
    </div>
  )
}

export default Fooditem
