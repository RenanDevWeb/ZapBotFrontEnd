import React from 'react';
import './icons.css'
import {BsFillBellFill,BsThreeDotsVertical} from 'react-icons/bs'
// import { Container } from './styles';

function BoxIcons() {
  return (
    <>
      <div className="iconsSet">
       <h4>Name</h4>
       <nav>
        <ul>
        <li><BsFillBellFill /></li>
        <li><BsThreeDotsVertical /></li>        
        </ul>
      </nav>
      </div>
    </>
  );
}

export default BoxIcons;