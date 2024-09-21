import './Navbar.css'
import { Link } from "react-router-dom";
import logo from './../../assets/Logo.png'
import search from './../../assets/search.png'
import bag from './../../assets/shopping-bag.png'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menu toggle funksiyasi
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // ochiq bo'lsa yopadi, yopiq bo'lsa ochadi
    };
    return (
        <div className="Navbar">
            <div className="navbar">

                <ul className={isMenuOpen ? 'active' : ''} id='navOne'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/reservation'}>Reservation</Link>
                    </li>
                </ul>
                <Link to={'/'}>
                    <img src={logo} alt="" />

                </Link>
                <ul className={isMenuOpen ? 'active' : ''} id='navTwo'>
                    <li>
                        <Link to={'/pages'}>Pages</Link>
                    </li>
                    <li>
                        <Link to={'/shop'}>Shop</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <img src={search} alt="" className='icons' />
                    </li>
                    <li>
                        <img src={bag} alt="" className='icons' />
                    </li>
                </ul>
                <div className="menu-icon" id='menuIcon' onClick={toggleMenu}>

                    <CiMenuBurger className='icons-menu' />
                </div>

            </div>



        </div>
    );
}

export default Navbar;
