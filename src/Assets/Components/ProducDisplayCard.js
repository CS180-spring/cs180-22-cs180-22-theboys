import React from "react";
import NeoMorphicIcon from "./NeoMorphicIcon";

import '../Styles/neomorphicStyles.css'
import '../Styles/textStyles.css'
import { useNavigate } from "react-router-dom";

export default function  ProductDisplayCard({itemTitle, itemPrice, itemImage})
{   
      const navigate = useNavigate();
      return (
    
        <div className='neomorphic-card' onClick={()=>{navigate("/singleproduct")}}>
       
        <div className='image-display'>
        <img 
           src={ `${itemImage}`}/>
        </div>

        <div 
          className='title-text'
          style={{
            fontSize: '1.6em',
            marginLeft: '20px',
            marginTop: '10px',
            alignSelf: 'flex-start'
          }}
        >{itemTitle}</div>
        
        <div 
          className='title-text'
          style={{
            fontSize: '1.3em',
            marginLeft: '20px',
            alignSelf: 'flex-start',
            marginTop: '10px',
            marginBottom: 'auto'
          }}
        >{`$${itemPrice}`}</div>
        <NeoMorphicIcon 
          iconFilepath={`Images/shopping-cart` } 
          style = {{
            width: '50px',
            height: '50px',
            marginRight: "5%",
            alignSelf: 'flex-end',
            justifySelf: '', 
            bottom: "10px",
            top: 'auto'
          }}
        />

        </div>
 
        
  );
}