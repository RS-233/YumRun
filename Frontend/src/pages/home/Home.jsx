import React, { useContext, useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownlode from '../../Components/AppDownlode/AppDownlode'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {

  const { category, setCategory } = useContext(StoreContext);

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category}/>
        <AppDownlode/>
    </div>
  )
}
export default Home
