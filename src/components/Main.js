import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Main(props) {
    return (
        <div>
            <h2>Main</h2>
            <p>Do you want to learn more about Maria?</p>
            <Link to='/about'>Yes, I do</Link>
        </div>
    )
}

export default Main;