import { useState,useEffect } from "react";

const useRestaurant = (restId) => {
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4504122&lng=78.594297&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json);
        setRestaurant(json);
    }

    return restaurant;
// get data from the api endpoint we have of the swiggy 
//return data of the restuarant 


}

export default useRestaurant;