import { CartContext } from "../contexts/cart";
import { useState } from "react";

const CartProvider = props => {
    const [cart, setcart] = useState([]);
    return <CartContext.Provider value={{cart, setcart}} {...props} />;
}

export default CartProvider;