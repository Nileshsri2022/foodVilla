import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./Config";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestauraunt";
import Shimmer from "./Shimmer";
const RestruantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="box">
      {restaurant?.map((element) => {
        return (
          <div className="card">
            <div>
              <img
                src={IMG_CDN_URL + element?.card?.info.imageId}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="card-items">
              <p>Name: {element?.card?.info.name}</p>
              <p>Price: {element?.card?.info.price}</p>
              <p>id: {element?.card?.info.id}</p>
              <p>
                category:{" "}
                {element?.card?.info?.ratings?.aggregatedRating?.rating}
              </p>
              <p>Veg: {element?.card?.info.isVeg}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RestruantMenu;
