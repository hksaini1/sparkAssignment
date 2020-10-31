import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand logo-color" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">My Portfolio</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Client</a>
                    </li>
                    <li className="nav-item active">
                        <button className="btn btn-outline-default my-2 my-sm-0 mx-2" type="submit">Get in touch</button>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;