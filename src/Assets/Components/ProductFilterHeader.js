import React from "react";
import '../Styles/textStyles.css'
import '../Styles/ProductFilterHeader.css'
import SortByDropdown from './SortByDropdown.js'

export default function ProductFilterHeader({})
{
    
    return(
        <div className="product-filter-header">
            <div className="filter-by">Filter By:</div>
            <div className = "sort-by-group"><SortByDropdown/></div>
        </div>
    )
}