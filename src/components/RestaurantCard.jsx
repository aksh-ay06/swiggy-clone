import { useContext } from "react";
import { IMG_CDN_URL } from "./constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ name, cuisines, totalRatingsString, cloudinaryImageId }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 h-96 p-4 m-4 shadow-lg bg-gray-50 hover:bg-gray-400 rounded-lg">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name + " restaurant image"}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="font-bold text-lg mt-2">{name}</h2>
      <h3 className="text-sm text-gray-700">{cuisines.join(", ")}</h3>
      <h4 className="text-sm text-gray-600">{totalRatingsString} stars</h4>
      {/* Added conditional check in case user is undefined */}
      {user?.name && (
        <span className="font-bold text-sm text-purple-700 block mt-2">User: {user.name}</span>
      )}
    </div>
  );
};

export default RestaurantCard;
