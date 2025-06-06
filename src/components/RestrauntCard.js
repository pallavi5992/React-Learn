import {CDN_URL} from "../../utils/constants"
const RestrauntCard = ({
  name,
  cuisines,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={CDN_URL +cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
       <h3>{costForTwoString}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestrauntCard