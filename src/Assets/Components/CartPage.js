import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Select from "./Select";

import { CartContext } from "../../App";

import CartPageItemView from "./CartPageItemView";

import '../Styles/CartPageStyles.css'
import '../Styles/CartPageGrid.css'

export default function CartPage()
{
    const {cart, setCart} = React.useContext(CartContext);

    const GenerateCartList = ()=> {
        let arr = [];

        for(let i = 0; i < cart.cartItems.length; i++)
        {
            arr.push(
                <div className="cart-grid-item" key = {i}>
                    <CartPageItemView 
                        product={cart.cartItems[i]}
                    />
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i}>
                    <Select 
                        initialText = {`${cart.cartItems[i].cartquantity}`}
                        options={[
                            cart.cartItems[i].cartquantity - 1, 
                            cart.cartItems[i].cartquantity,
                            cart.cartItems[i].cartquantity + 1
                        ]}
                        style={{
                            width: '50px'
                        }}
                        onChangeSelection={()=> {}}
                    />
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i}>
                    <div className="title-text">{`$${cart.cartItems[i].productprice}`}</div>
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i}>
                    <div className="title-text">{`$${cart.cartItems[i].cartquantity * cart.cartItems[i].productprice}`}</div>
                </div>
            )
        }

        return arr;
    }

    return(
        <div>
            <SiteHeader />
                <div className="cart-grid">
                    {GenerateCartList()}
                </div>
            <SiteFooter />
        </div>
    )
}