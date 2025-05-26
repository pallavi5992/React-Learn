import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const RestrauntMenu = () => {
  const { resId } = useParams()
  const [resinfo, setResinfo] = useState(null)

  useEffect(() => {
    fetchmenu()
  }, [])

  const fetchmenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9615398&lng=79.2961468&restaurantId=${resId}`
    )
    const json = await data.json()
    console.log(json?.data?.cards[2]?.card?.card?.info)
    setResinfo(json?.data?.cards[2]?.card?.card?.info)
  }

  if (resinfo === null) return <Shimmer />

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating, menu } = resinfo

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines?.join(', ')}</h3>
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>Menu</h2>
      <ul>
        {menu?.items &&
          Object.values(menu.items).map((item) => (
            <li key={item.id}>
              {item.name} - ₹{(item.price || item.defaultPrice) / 100}
            </li>
          ))}
      </ul>
      <h4>{costForTwoMessage}</h4>
      <h5>{avgRating} stars</h5>
    </div>
  )
}

export default RestrauntMenu
