import React from "react";
import SiteHeader from "./SiteHeader";
import SingleProductView from "./SingleProductView";
import SiteFooter from "./SiteFooter";
export default function SingleProductPage(){
    window.scrollTo({top: 0, left: 0, behavior: "instant"})
    
    return(
        <div style ={{width:"100vw"}}>
            <SiteHeader/>
            <SingleProductView product={{}}/>
            <SiteFooter/>
        </div>
    )
}