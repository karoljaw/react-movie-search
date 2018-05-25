import React from 'react';
import classes from './Navigation.css';
import logo from './408.png';

const Navigation = (props) => {
console.log(props);
    return (
        <div>
            <nav className={classes.Navbar}>
                <img src={logo} className={classes.Image} alt='movie db logo'/>
            </nav>
            <input className={classes.Input} type='text' value={props.value} onChange={props.change} placeholder="Search for a movie"></input>
        </div>
    );
};

export default Navigation;