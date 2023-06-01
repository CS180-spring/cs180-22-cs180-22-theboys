import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Select from "./Select";

import { CartContext } from "../../App";

import CartPageItemView from "./CartPageItemView";

import '../Styles/CartPageStyles.css'
import '../Styles/CartPageGrid.css'

import useUpdateCartItem from "../Hooks/useUpdateCart";

export default function CartPage()
{
    const {cart, setCart} = React.useContext(CartContext);
    const [updatingCartItem, setUpdatingCartItem, product, setProduct] = useUpdateCartItem();

    const GenerateCartList = ()=> {
        let arr = [];

        arr.push(
            <div className="cart-grid-item" key = {-4}>
                <div className="title-text">{"Product"}</div>
            </div>
        )

        arr.push(
            <div className="cart-grid-item" key = {-3}>
                <div className="title-text">{"QTY"}</div>
            </div>
        )

        arr.push(
            <div className="cart-grid-item" key = {-2}>
                <div className="title-text">{"Price"}</div>
            </div>
        )

        arr.push(
            <div className="cart-grid-item" key = {-1}>
                <div className="title-text">{"Total Price"}</div>
            </div>
        )

        for(let i = 0; i < cart.cartItems.length; i++)
        {
            arr.push(
                <div className="cart-grid-item" key = {i * 4}>
                    <CartPageItemView 
                        product={cart.cartItems[i]}
                    />
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i * 4 + 1}>
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
                        onChangeSelection={(curr)=> {
                            let p = cart.cartItems[i];
                            p = {
                                ...p,
                                cartquantity: Number(curr)
                            }
                            console.log(p)
                            setProduct(p);
                            setUpdatingCartItem(true)
                        }}
                    />
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i * 4 + 2}>
                    <div className="title-text">{`$${cart.cartItems[i].productprice}`}</div>
                </div>
            )
            arr.push(
                <div className="cart-grid-item" key = {i * 4 + 3}>
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