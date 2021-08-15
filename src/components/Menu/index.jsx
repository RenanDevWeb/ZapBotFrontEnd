import React from 'react';
import {Link} from 'react-router-dom'
import {BsFillBootstrapFill,BsFillHouseDoorFill,BsFillPersonFill,BsChatSquareDots,BsGearFill} from 'react-icons/bs'
import './menu.css'

function Menu() {
  return (
< div className="Container">
  
      <h3 className="logo"><BsFillBootstrapFill /></h3>

       <nav>
         <ul>
           <li><Link to="/" ><BsFillHouseDoorFill /></Link></li>
           <li><Link to="/chat"><BsChatSquareDots /></Link></li>
           <li><BsFillPersonFill /></li>
           <li><Link to="/configuracoes"><BsGearFill /></Link></li>
         </ul>
       </nav>
</div>
  );
}

export default Menu;