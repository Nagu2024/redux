import React from 'react'
import './App.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";




const Header = () => {
  
  const users = useSelector((state)=>state.users);
  const usedispatch = useDispatch();


  

 // console.log(users.theme);

  const chgTheme =  () => {

  
    //document.body.style.backgroundColor = 'blue';
  }

  return (
    <div onClick={chgTheme} className='headerclass'><h5>CLICK TO CHANGE THEME </h5></div>
  )
}

export default Header