import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function NavBar() {
    return (
        <nav>
            <ul className="navbar-list header">
                <li>
                    <h1 className="navbar-title">My NFT MarketPlace</h1>
                </li>
                <li>
                    <li>
                        <button className="connect-wallet">
                            Connect to Wallet
                        </button>
                    </li>
                </li>
            </ul>
            <ul className="navbar-list footer">
                <li>
                    <Link to="/" className="navbar-link">
                        <button className="navbar-button">Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/create" className="navbar-link">
                        <button className="navbar-button">Create</button>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="navbar-link">
                        <button className="navbar-button">Profile</button>
                    </Link>
                </li>
                <li className="search">
                    <div class="searchBox">
                        <input
                            class="searchInput"
                            type="text"
                            name=""
                            placeholder="Search"
                        />
                        <button class="searchButton" href="#">
                            <i class="material-icons">
                                <img src="src\assets\search.png" alt="Search" />
                            </i>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
