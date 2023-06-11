import React from "react";
import { Link } from "react-router-dom";

function MainScreen() {
  return (
    <div className="background-image">
      <div className="center-container">
        <div className="text-container">
          <h3 className="header light">Welcome to Our Restaurant!</h3>
          <h5 className="header light">
            Explore a variety of dishes from different categories. Taste the goodness from our menu
            and place your order now.
          </h5>
          <Link to="/menu">
            <button className="btn-large waves-effect waves-light">View Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
