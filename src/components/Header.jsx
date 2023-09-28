import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => {
    return(
    <h1 id='title' key='h2'>
        <Link to='/'>
        <img className="h-28 p-2 mix-blend-multiply" data-testid="logo" src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="logo" />
        </Link>
    </h1> 
)
};


const Header = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex flex-wrap justify-between bg-blue-100 shadow-lg">
        <Title />
        <div className="nav-items">
            <ul className="flex py-10">
                <li className='px-2'><Link to='/'>Home</Link></li>
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to='/contact'>Contact</Link></li>
                <li className="px-2"><Link to='/instamart'>Instamart</Link></li>
                <li className='px-2' data-testid="cart"><Link to='/cart'>Cart - {cartItems.length} items</Link></li>
            </ul>
        </div>
        <span className="p-10 font-bold text-red-600 flex">
        {user.name}-{user.email}
        </span>
        {
        (isLoggedIn) ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        
        
    </div>
  )
}

export default Header;