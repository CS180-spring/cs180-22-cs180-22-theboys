import React from "react";
import ProductSearchBar from '../Components/ProductSearchBar';
import ProductCart from '../Components/ProductCart';
import '../Styles/textStyles.css'
import '../Styles/SiteHeaderStyles.css'
import '../Styles/SiteFooterStyles.css'

export default function SiteHeader({})
{
    
    return(
        <div>
            <div className="site-header">
                <ProductSearchBar/>
                <div className='title-text' style={{fontSize:"2em"}}>Bored Ape Escape</div>
                <div className="cart-group">
                <div className="title-text"onClick={()=>{console.log("sign in")}}>Sign In</div>
                    <ProductCart/>
                </div>
            </div>

            <div className="navigation-menu">
                <div className="navigation-menu-item">
                    <div className="title-text">{"Home"}</div>
                </div>
                <div className="navigation-menu-item">
                    <div className="title-text">{"Shop"}</div>
                </div>
                <div className="navigation-menu-item">
                    <div className="title-text">{"News & Events"}</div>
                </div>
                <div className="navigation-menu-item">
                    <div className="title-text">{"About"}</div>
                </div>
                <div className="navigation-menu-item">
                    <div className="title-text">{"Contact"}</div>
                </div>
            </div>
            <div className="footer-divider-bar"></div>
        </div>
    )
}