import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
         <div className={"ui center aligned basic segment"}>
             
             <div className={"ui large compact menu "}>
                 <div className={"ui simple dropdown item"}>
                     <h2 className={"ui icon header"}/>
                     <i className={"align justify icon"}/>
                     <div className="content">
                         Streams
                     </div>
                     
                     <div className={"menu"}>
                         <div className={"item"}>
                             <Link to={"/"} className={"item"}>
                                 <p>Streamy</p>
                             </Link>
                         </div>
                         
                         
                         <div className={"item"}>
                             <Link to={"/"} className={"item"}>
                                 <p>AllStreams</p>
                             </Link>
                         </div>
                         
                         <div className={"item"}>
                             <GoogleAuth/>
                         </div>
                         
                     </div>
                 
                 </div>
             
             </div>
         
         </div>
    
    
    );
};

export default Header;