import React from "react";

import "../Styles/SearchBarStyles.css"

export default function ProductSearchBar({})
{
    const [searchInput, setSearchInput] = React.useState("");
    
    return(
        <form className="search-bar">
            <input type="text"value={searchInput}onChange={(e)=>{setSearchInput(e.target.value)}}>

            </input>
            <img src={`${process.env.PUBLIC_URL}Images/search-icon.png`}style={{width:"40px",height:"40px"}}/>
        </form>
    )
}