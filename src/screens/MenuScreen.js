import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function MenuScreen() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`${API_URL}categories/`);
      setCategories(data);
    };

    const fetchDishes = async () => {
      const { data } = await axios.get(`${API_URL}dishes/`);
      setDishes(data);
    };

    fetchCategories();
    fetchDishes();
  }, []);

  return (
    <div className="container">
      <h1>Menu</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div className="row">
            {dishes
              .filter((dish) => dish.category === category.id)
              .map((dish) => (
                <div className="col s12 m4" key={dish.id}>
                  <div className="card item-card">
                    <div className="card-image">
                      <img className="category-image" src={dish.image} alt={dish.name} />
                      <span className="card-title">{dish.name}</span>
                    </div>
                    <div className="card-content">
                      <p>{dish.description}</p>
                      <p>${dish.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuScreen;
