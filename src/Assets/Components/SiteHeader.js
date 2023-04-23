import React from "react";
import ProductSearchBar from '../Components/ProductSearchBar';
import ProductCart from '../Components/ProductCart';
import '../Styles/textStyles.css'
import '../Styles/SiteHeaderStyles.css'

export default function SiteHeader({})
{
    
    return(
        <div className="site-header">
            <ProductSearchBar/>
            <div className='title' style={{fontSize:"2em"}}>Bored Ape Escape</div>
            <div className="cart-group">
                <div className="title"onClick={()=>{console.log("sign in")}}>Sign In</div>
                <ProductCart/>
            </div>
        </div>
    )
}