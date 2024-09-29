import { IMG_CDN_URL } from "./Config";
const RestrauntCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    locality,
    costForTwo,
    avgRating,
    sla
}) => {
  return (
    <>
      <div class="bg">
        <h1></h1>
      </div>
      <div class="nft">
        <div class="main card">
          <img
            class="tokenImage"
            alt="NFT"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
          <h2>{name}</h2>
          <p class="description">{cuisines.join(",")}</p>
          <p className="description">{locality}</p>
          <div class="tokenInfo">
            <div class="price">
              <p>{costForTwo}</p>
            </div>
            <div class="duration">
              <ins>*</ins>
              <p>{avgRating}</p>
            </div>
          </div>
          <hr />
          <div class="creator">
            <div class="wrapper">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="Creator"
              />
            </div>
            <p>
              Delivery in {sla.deliveryTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestrauntCard;
