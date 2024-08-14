import React, { useState } from "react";

import LOGO_URL from "../utils/constants";

const Hearder = () => {
  // const btnName ="Login";
  const [btnChange, setbtnChange] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div> </div>

      <div className="Nav-Item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li> Contact Us</li>
          <li> Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnChange == "Login"
                ? setbtnChange("Logout")
                : setbtnChange("Login");
            }}
          >
            {btnChange}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Hearder;
