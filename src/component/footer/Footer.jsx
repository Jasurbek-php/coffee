import './Footer.css'
import logo from './../../assets/Logo.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer'>
            <ul>
                <li>
                    <Link to={'/'}>
                        <img src={logo} alt="" /></Link>
                </li>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/reservation'}>Rerervation</Link>
                </li>
                <li>
                    <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/pages'}>Pages</Link>
                </li>
                <li>
                    <Link to={'/shop'}>Shop</Link>
                </li>
                <li>
                    <Link to={'/blogs'}>Blogs</Link>
                </li>
                <input type="text" name="" id="" />

            </ul>

        </div>
    )
}

export default Footer;