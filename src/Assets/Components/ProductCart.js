import React from "react";
import "../Styles/textStyles.css"

export default function ProductCart({})
{
    const [itemsInCart, setItemsInCart] = React.useState(3);
    
    return(
        <div>
            <img src={`${process.env.PUBLIC_URL}Images/shopping-cart.png`}style={{width:"40px",height:"40px"}}/>
            <div className="title-text">{itemsInCart}</div>
        </div>
    )
}