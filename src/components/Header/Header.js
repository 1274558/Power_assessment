import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="HeaderLayout">
                <h1 className="HeaderInfo">TV Shows</h1>
            </div>
        );
    }
}

export default Header;