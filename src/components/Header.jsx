import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
    return (
        <h1 id='title' key='h2'>
            <Link to='/'>
                <img 
                    className="h-28 p-2 mix-blend-multiply hover:scale-105 transition-transform duration-300" 
                    data-testid="logo" 
                    src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" 
                    alt="logo" 
                />
            </Link>
        </h1>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Persist login state across page refresh
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
    };

    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex flex-wrap justify-between bg-blue-100 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className='px-2 hover:text-blue-500'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-2 hover:text-blue-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2 hover:text-blue-500">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="px-2 hover:text-blue-500">
                        <Link to='/instamart'>Instamart</Link>
                    </li>
                    <li className='px-2 hover:text-blue-500' data-testid="cart">
                        <Link to='/cart'>
                            {cartItems.length > 0 ? `Cart - ${cartItems.length} items` : 'Cart is Empty'}
                        </Link>
                    </li>
                </ul>
            </div>
            <span className="p-10 font-bold text-red-600 flex">
                {user ? `${user.name} - ${user.email}` : "Guest"}
            </span>
            {
                isLoggedIn ? 
                    <button onClick={handleLogout} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button> : 
                    <button onClick={handleLogin} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
            }
        </div>
    );
};

export default Header;
