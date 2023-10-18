
import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg"
import CartButton from "./HeaderCartButton";

const Header = (props) => {


    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>React Meals</h1>
                <CartButton />
            </header>
            <div className= {classes['main-image']}>
            <img src={meals} alt="An image full of food" />
            </div>


        </React.Fragment>
    )
}

export default Header;