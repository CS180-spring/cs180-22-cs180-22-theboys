import React from "react";
import '../Styles/CarouselProductCard.css'
import '../Styles/textStyles.css'
import { useNavigate } from "react-router-dom";
//Simplified product card to be used in carousel
export default function CarouselProductCard({imageUrl, productName, price, sellerName})
{
    const navigate = useNavigate();
    return(
        <div className="carousel-product-card" onClick={()=>{navigate("/singleproduct")}}>
            <img src={imageUrl} />
            <div className="title-text">{productName}</div>
            <div className="basic-text">{sellerName}</div>
            <div className="title-text">{price}</div>
        </div>
    )
}