import React from "react";
import SiteHeader from "./SiteHeader";
import SingleProductView from "./SingleProductView";
import SiteFooter from "./SiteFooter";

import { useLocation, useSearchParams } from "react-router-dom";
export default function SingleProductPage(){
    window.scrollTo({top: 0, left: 0, behavior: "instant"})
    const location = useLocation();
    const product = location.state.product
    return(
        <div style ={{width:"100vw"}}>
            <SiteHeader/>
            <SingleProductView product={product}/>
            <SiteFooter/>
        </div>
    )
}