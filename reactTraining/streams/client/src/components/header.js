import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
         <div>
             <div className={"ui two item menu"}>
                 <div className={"item"}>
                     <Link to={"/"} className={"item"}>
                         <p >StreamY</p>
                     </Link>
                 </div>
                 
                 
                 <div className={"item"}>
                     <Link to={"/"} className={"item"}>
                         <p >AllStreams</p>
                     </Link>
                 </div>
                 
                 <div className={"item"}>
                 <GoogleAuth/>
                 </div>
                 
             </div>
            
         
         </div>
    
    
    );
};

export default Header;