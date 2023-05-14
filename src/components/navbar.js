import "./styles/navbar.css"
import { useState } from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import {RxCross2} from "react-icons/rx"

function Navbar() {
    const[show, setShow] = useState(false);
    
    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <nav class="navbar">
            <div class="nav-contents">
                <h1 class="logo">Shoester</h1>
                <ul class="nav-links">
                    <li ><a href="/#">Home</a></li>
                    <li ><a href="/#">About</a></li>
                    <li ><a href="/#">Shoes</a></li>
                    <li ><a href="/#">Contact</a></li>
                </ul>
                <div><input type="search" placeholder="Search" class="searchbar"></input></div>
                <div class="nav-icon-bar" onClick={toggleShow}>{show ? <RxCross2/>:<RxHamburgerMenu/>}</div>
            </div>
            <div class={`nav-hidden${show ? "-open":""}`}>
                <ul class="nav-links-hidden">
                    <li ><a href="/#">Home</a></li>
                    <li ><a href="/#">About</a></li>
                    <li ><a href="/#">Shoes</a></li>
                    <li ><a href="/#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;