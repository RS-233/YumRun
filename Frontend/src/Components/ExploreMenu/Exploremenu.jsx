import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  
  return (
    <div className='exploremenu' id='explore-menu'>
      <h1>Explore Our <span className='menu-span'>Menu</span> </h1>
      <p className='explore-menu-text'>Dive into a world of flavor with our diverse 
        menu selection, where every dish is a culinary
        masterpiece waiting to be savored.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                   </div> 
                )

            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
