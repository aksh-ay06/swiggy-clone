import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restaurant = useRestaurant(restId);
  const dispatch = useDispatch();

  const handleItems = (item) => {
    dispatch(addItem(item));
  };

  // Extracting restaurant information from the JSON structure
  const restaurantInfo = restaurant?.data?.cards?.[2]?.card?.card?.info;
  const menuItems =
    restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex gap-x-8">
      {/* Restaurant Details */}
      <div className="h-auto max-w-sm rounded-lg shadow-lg bg-white p-4">
        <img
          src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt={restaurantInfo?.name || "Restaurant Image"}
          className="w-full h-56 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{restaurantInfo?.name || "Restaurant Name"}</h2>
          <h3>Area: {restaurantInfo?.areaName || "Not available"}</h3>
          <h3>Rating: {restaurantInfo?.avgRating ? `${restaurantInfo.avgRating} stars` : "Not available"}</h3>
          <h3>City: {restaurantInfo?.city || "Not available"}</h3>
          <h3>Cuisines: {restaurantInfo?.cuisines?.join(", ") || "Not available"}</h3>
          <h3>Locality: {restaurantInfo?.locality || "Not available"}</h3>
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <h2 className="text-xl font-bold mb-4">Menu Items</h2>
        <div className="space-y-4">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <div key={item?.card?.info?.id} className="flex gap-4 p-4 border-b">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || "Price not available"}
                  </h3>
                  <p className="text-sm text-gray-600">{item?.card?.info?.description || "No description available"}</p>
                  <button
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleItems(item)}
                  >
                    Add to Cart
                  </button>
                </div>
                {item?.card?.info?.imageId && (
                  <img
                    className="h-24 w-24 object-cover rounded-md"
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name || "Menu item image"}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-center">No items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
