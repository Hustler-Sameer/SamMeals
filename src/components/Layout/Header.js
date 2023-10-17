
import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg"


const Header = (props) => {


    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className= {classes['main-image']}>
            <img src={meals} alt="An image full of food" />
            </div>


        </React.Fragment>
    )
}

export default Header;