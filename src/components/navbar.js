import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="nav">
                <div className="collapse nav-collapse">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to="/inbox" className="nav-a">Inbox</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/all" className="nav-a">All Calls</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}