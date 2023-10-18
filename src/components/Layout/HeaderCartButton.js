
import React from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";


const CartButton = props => {
    // We have added 3 spans for logo , text and a small badge displaying items in cart currently
    return <button className={classes.button}>
        <span className={classes.icon}> 
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>




    </button>
}

export default CartButton;