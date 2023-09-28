import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    
    const {restId} = useParams();
    
    const restaurant = useRestaurant(restId);

    const dispatch =useDispatch();

    const handleItems = (item) =>{
        dispatch(addItem(item))
    };
    
    return (!restaurant)?(<Shimmer/>):(
        <div className='flex gap-x-8'>
            <div className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
                <div className="max-w- rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
                    <img src={IMG_CDN_URL+restaurant.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="image from the restaurant" />
                </div>
                <div className="menu">
                    <h2>Name:{restaurant.data?.cards[0]?.card?.card?.info?.name}</h2>
                    <h3>Area : {restaurant.data?.cards[0]?.card?.card?.info?.areaName}</h3>
                    <h3>Average Rating : {restaurant.data?.cards[0]?.card?.card?.info?.avgRating} avg stars</h3>
                    <h3>City:{restaurant.data?.cards[0]?.card?.card?.info?.city}</h3>
                    <h3>Cusinies:{restaurant.data?.cards[0]?.card?.card?.info?.cusinies}</h3>
                    <h3>Locality:{restaurant.data?.cards[0]?.card?.card?.info?.locality}</h3>
                </div>
            </div>
            <div>
                <div>
                    {restaurant.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                        (item)=> 
                            <div key={item?.card?.info?.id} className="flex-column "> 
                            <h3 >{item?.card?.info?.name} - {item?.card?.info?.price/100} <button className='p-2 bg-red-500' onClick={()=>handleItems(item)}>Add</button> </h3>
                            <div className="flex-auto">
                                <div className="flex-wrap">{item?.card?.info?.description}</div>
                                <div><img className="h-auto w-36" src={IMG_CDN_URL+item?.card?.info?.imageId}></img></div>
                            </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )


}

export default RestaurantMenu;