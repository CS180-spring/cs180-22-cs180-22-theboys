import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Carousel from "./Carousel";
import '../Styles/textStyles.css'

export default function Homepage()
{
    return(
        <div>
            <SiteHeader />
            <div>
                <div 
                    className="title-text"
                    style = {{
                        fontSize : '1.3em'
                    }}
                >{"New Arrivals"}</div>
                <Carousel />
            </div>
            <SiteFooter />
        </div>
    )
}