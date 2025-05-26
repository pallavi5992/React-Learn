import { useEffect, useState } from "react";

const useRestrauntmenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);
  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9615398&lng=79.2961468&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setResinfo(json?.data?.cards[2]?.card?.card?.info);
  };

  return resinfo;
};

export default useRestrauntmenu;
