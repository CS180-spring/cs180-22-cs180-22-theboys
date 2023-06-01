import React from "react";
import "../Styles/textStyles.css"
import { CartContext } from "../../App";
import useGetCart from "../Hooks/useGetCart";

export default function ProductCart()
{
    const [fetchingCart,  setFetchingCart] = useGetCart();
    const {cart, setCart} = React.useContext(CartContext);
    
    const [quantity, setQuantity] = React.useState(cart.cartItems.length);

    React.useEffect(()=>{
        console.log(cart.cartItems.length)
        setQuantity(cart.cartItems.length);
        
    }, [cart, fetchingCart])

    return(
        <div>
            <img src={`${process.env.PUBLIC_URL}Images/shopping-cart.png`}style={{width:"40px",height:"40px"}}/>
            <div className="title-text">{quantity}</div>
        </div>
    )
}