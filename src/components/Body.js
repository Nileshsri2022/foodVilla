import RestrauntCard from "./Card";
import { restrautList } from "./Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";
const Body = () => {
  //below equal to const Search="KFC";
  const [Search, setSearch] = useState();
  // for some time when you refresh it show you restrautList then when UI updates restaurants data you show
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("hello");
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // every time State variable changes it re render whole component and makes the UI sync with State
  // this is not where you call api through fetch()
  // console.log('render()');
  
  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length == 0) {
  //   return <h1>No resturant match your filter!!</h1>;
  // }
  const isOnline=useOnline()
  if(!isOnline){
    return <h1>Offline check your connection</h1>
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="search-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(Search, allRestaurants);
          setfilteredRestaurants(data);
        }}
      >
        Search
      </button>

      <div id="search-container">
        {
          // you have to write logic for NO restaurant found here
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restruant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestrauntCard {...restaurant.info} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};
export default Body;
