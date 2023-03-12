import React from 'react'
import './Nav.css';
import logo from './logo.png';
//import { BrowserRouter as Link } from "react-router-dom";
//import LoginButton from './LoginButton';
//import LogoutButton from './LogoutButton';

const NavItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );

const Nav = () => {
    
  return (
    <div>
        
        <nav className='nav'>
          
        <div className="logo">
        <img src={logo} alt="logo"  />
         </div>
          
          <ul>
          {["Benefits", "How its Works", "Ourmision"].map((item, index) => (
          <NavItem key={item + index} title={item} />
        ))}
          </ul>
          
        </nav>
        <div className="login">
  
         <ul>
          <li>
            Login
            </li>
            <li>
             Sing up
            </li>
            </ul>
     </div>
         
    </div>
  )
}

export default Nav;