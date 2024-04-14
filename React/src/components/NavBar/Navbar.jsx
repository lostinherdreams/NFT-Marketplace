import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ConnectBtn } from "./ConnectBtn/ConnectBtn";
import { SearchBox } from "./SearchBox/SearchBox";
import * as eth from "../ethers/ethService";
export function NavBar() {
    return (
        <nav>
            <ul className="navbar-list header">
                <li>
                    <h1 className="navbar-title">My NFT MarketPlace</h1>
                </li>
                <li>
                    <ConnectBtn />
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
                    <SearchBox />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
