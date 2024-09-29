// why custom Hooks?
// in normal function you cant define useState,useEffect that make reconcilliation proves renders
import { useState,useEffect } from "react";
const useRestaurant=(resId)=>{

    const [res, setRes] = useState(null);

    useEffect(() => {
      getRetaurantInfo();
    }, []);
  
    // 165128
    async function getRetaurantInfo() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.49690&lng=80.32460&restaurantId=" +
        resId +
          "&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
      );
      const json = await data.json();
      console.log("inside getRetaurantInfo() ");
      console.log(json);
      const dataValue =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      console.log(dataValue);
      setRes(dataValue);
    }
    
    return res;
};
export default useRestaurant;