import React, { useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterRestuhaji,setfilterRestu] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fatchData();
  }, []);
  console.log(listOfRestaurants);

  const fatchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);

    // Update the state with the fetched data
    setListOfRestraunt(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    setfilterRestu(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    // Log the data to the console
    // console.log('Fetched Restaurants Data:', json.data.cards[0].card.card.imageGridCards.info);
  };
  //? Shimmer UI that is
  //this is also conditional rendering
  // if(listOfRestaurants.length == 0) {
  //   return(
  //     <div>
  //       <Shimmer/>
  //     </div>
  //   )
  // }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* //search for cards */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the resturent card and update the UI
              
              console.log(searchText); 
              const filterrestu = listOfRestaurants.filter((res) =>
                res.action.text.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterrestu)
              setfilterRestu(filterrestu);
              
            }}
          >
            Search
          </button>
        </div>
        {/* <button className='filter-btn' onClick={() => {
          const filterData = resobj.filter((res) => res.data.avgRating > 4);
          setListOfRestraunt(filterData);
          console.log('Filtered Data:', filterData);
        }}>
          Top Rated Resto..   
        </button> */}
      </div>
      <div className="res-container">
        {listOfRestaurants &&
          filterRestuhaji.map((e) => {
            return <ResturentCard key={e.id} cardData={e} />;
          })}
      </div>
    </div>
  );
};

export default Body;
