import { useContext } from "react";
import { IMG_CDN_URL } from "./constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({name,cuisines,totalRatingsString,cloudinaryImageId}) => {
    const {user} = useContext(UserContext);
    return (
    <div className="w-56 h-96 p-2 m-2 shadow-lg bg-grey-50 hover:bg-gray-400">
        <img src={IMG_CDN_URL+cloudinaryImageId}></img>
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{totalRatingsString} stars</h4>
        <span className="font-bold ">{user.name}</span>
    </div>
    )
}

export default RestaurantCard;
