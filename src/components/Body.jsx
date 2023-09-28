import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantsList } from "./constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from '../utils/useOnline';
import UserContext from "../utils/UserContext";


function filterData(SearchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase())
    )
    return filterData;

}

const Body = () => {
  const [allrestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [SearchText,setSearchText]=useState('');
  const {user,setUser} = useContext(UserContext);
  useEffect(()=>{
      getRestaurant();
  },[]);

  async function getRestaurant(){
    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4504122&lng=78.594297&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const online = useOnline();

  if(!online){
    return <h1>Oops something went wrong Check your internet connection.</h1>
  }

  if(!allrestaurants) return null;

  // if(filteredRestaurants?.length===0) return <h1>Nothing to display here.</h1>

  return allrestaurants?.length === 0 ? (<Shimmer/>) : (
  <>
    <div className="search-container p-4 my-2 bg-blue-100">
      <input 
      type="text" 
      className="search-input" 
      placeholder="Search" 
      value={SearchText}
      onChange={(e)=>{
        setSearchText(e.target.value);
      }} />
      <button 
      className="search-btn px-2 bg-purple-50 hover:bg-purple-200 rounded-sm"
      onClick={()=>{
        const data = filterData(SearchText,allrestaurants);
        setFilteredRestaurants(data);
      }}>Search</button>
      <input value={user.name} onChange={
        e=> setUser({
          ...user,
          name:e.target.value,
        })
      }></input>
      <input value={user.email} onChange={
        e=> setUser({
          ...user,
          email:e.target.value,
        })
      }></input>
    </div>
    <div className="flex flex-wrap bg-blue-50">
      {filteredRestaurants.map((restaurant)=>{
          return <Link to= {'/restaurant/'+ restaurant.info.id} key={restaurant.info.id} ><RestaurantCard {...restaurant.info} /></Link>
        })
      }
    </div>
  </>
  )
}

export default Body;