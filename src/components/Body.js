import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from '../../utils/useOnlineStatus'


const Body = () => {
  const [restrautList, setRestrautList] = useState([]);
  const [fiterRest, setfilterRest] = useState([])
  const [searchText, setSearchText]= useState("")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // optional chaining
      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        "swiggy data"
      );
      setRestrautList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    } catch {
      console.log("error");
    }
  };

const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h3>Looks like you are offline! Please check your internet connection.</h3>;
  }


  return restrautList.length == 0 ?  <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <input type="text" className="searc-box" value={searchText} 
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        />
        <button onClick={()=>{
          console.log(searchText)
           const filterRes = restrautList.filter((res)=>{
  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
})

          setfilterRest(filterRes)

        }}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterLogic = restrautList.filter((res) => {
              return res.info.avgRating > 4;
            });

            setfilterRest(filterLogic);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conatiner">
        {fiterRest.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restraunt/"+restaurant.info.id}> <RestrauntCard  {...restaurant?.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
