import Layout from "../components/layout/Layout";
import ShopItem from '../components/shopitem/ShopItem.jsx'
import { getShopItems } from "../api/shopItems";
import { useState, useEffect, useContext } from "react";
import { useCart, CartContext } from '../contexts/cart'

const about = () => {

    const { cart, setcart } = useContext(CartContext)

    const handler = (item) => {
        setcart(cart.filter(cartItem => item.title!=cartItem.title))
    }

    return (
        <Layout>
            <div style={{ display: "flex", flexFlow: "row wrap", padding: "2em" }}>
                {cart && cart[0] && cart.map(item => <div style={{ margin: "2em" }}><ShopItem handler={handler} {...item} /></div>)}
            </div>
        </Layout>
    )
}

export default about