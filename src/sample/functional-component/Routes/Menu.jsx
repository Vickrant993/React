import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ()=>{
    return(
        <React.Fragment>
            <NavLink exact activeClassName="active_menu" to="/">About Us</NavLink>
            <NavLink exact activeClassName="active_menu" to="/contact">Contact Us</NavLink>
            <br /><br />
            <a href="/">About</a>
            <a href="/contact">Contact</a>
        </React.Fragment>
    );
}

export default Menu;