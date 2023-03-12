import React from 'react'
import './Welcome.css';
import { Link } from 'react-router-dom';
import hello from "../images/hello.svg";  

const Welcome = (props) => {
  return (
    <div className='my-welcome'>
      <div className="welcome-text">
        <h1>Create Temper proof<span className='nft'> NFTs </span>for your digital product</h1>
        <p>Working directly wit your business
           we will to a pratica 
          to build in to build your
          your NFT ecosystem

        </p>
        
        <button Link to={props.link} className='btns'>{props.text}Get started</button>
       <button className='bt'>Create NFTs</button>
      </div>
       <div className="welcome-img">
       <img src={hello} alt="hello"  />
      </div>
    </div>
  )
}

export default Welcome