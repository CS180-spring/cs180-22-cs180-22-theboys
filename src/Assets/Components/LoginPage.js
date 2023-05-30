import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import '../Styles/SingleProductPage.css'
import Login from "./Login"


export default function LoginPage(){


    return(
        <div>
            <SiteHeader/>
            <div className="twoColumns">
                <Login/>
            </div>
            <SiteFooter/>
        </div>
    )
}