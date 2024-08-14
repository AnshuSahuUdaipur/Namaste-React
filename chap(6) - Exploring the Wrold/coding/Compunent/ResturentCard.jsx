import React from "react";
const ResturentCard = ({cardData}) => {
    // console.log("card", cardData.data.name);
  console.log("card",cardData.action.text)
    const {
       action:{text},
       imageId,
       id
       
      
    } = cardData;

    const imgURL =`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imageId}`
    return (
      <div className="res-card">
      <div className="all">
      <img
          className="res-logo"
          src={imgURL}
        />
        <h3> {id}</h3>
        <h4> </h4>
        <h4> </h4>
        <h4> {text} rs </h4>
        <h4> min...</h4>
      </div>
      </div>
    );
  };
  
  export default ResturentCard