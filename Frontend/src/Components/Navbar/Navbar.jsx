import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home")
    const [hamburger, sethamburger] = useState(false)
    const [toggle, setToggle] = useState(false)

    const {getTotalCartAmount,token,setToken,findItem,searchTerm, setSearchTerm,} = useContext(StoreContext)
    const navigate = useNavigate();

    const toggleClass = () => {
      setToggle(!toggle)
      sethamburger(!hamburger);
    };

    const search = async () => {
      if( searchTerm == ""){
        
      }else{

        findItem(searchTerm);
      }
    }

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='navbar-logo'/></Link>
      <div className={hamburger===false?"navbar-menu":"hamburger-active"}>
        <Link to='/' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-downlode'onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer'onClick={()=>setMenu("contact us")}className={menu==="contact us"?"active":""}>Contact</a>
      </div>
      <div className='navbar-right' >
        <div className='navbar-search'>
          <input type="text" placeholder='Find your food' onChange = {(e) => setSearchTerm(e.target.value)} required/>
          {!searchTerm?<><img src={assets.search_icon} alt=""/></>:<><a href='#food-display'><img src={assets.search_icon} alt="" href='#explore-menu' onClick={() => search()} /></a></>}
        </div>
        <div className='ham-burger' onClick={toggleClass} >
            <div className={toggle===false?"lines":"crosslines"}></div>
            <div className={toggle===false?"lines":"crosslines"}></div>
            <div className={toggle===false?"lines":"crosslines"}></div>
        </div>
        
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profil'>
          <img className='navbar-profile-image' src={assets.profile_icon} alt="" />
          <ul className='nav-profile-dropdown'>
            <li onClick={()=>navigate('/myorders')} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>  
          </ul>
          
          </div>}
          
         </div> 
    </div>
  )
}

export default Navbar
