import { useState, useEffect } from "react";
import React from 'react';
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      fetch("/restaurants")
        .then((r) => r.json())
        .then(setRestaurants);
    }, []);
  
    function handleAddRestaurants(addedRestaurant) {
        setRestaurants((restaurants) => [...restaurants, addedRestaurant]);
    }
  
    // function handleUpdateRestaurant(updatedRestaurant) {
    //     setRestaurants((restaurants) =>
    //     restaurants.map((restaurant) => {
    //       return restaurant.id === updatedRestaurant.id ? updatedRestaurant : spice;
    //     })
    //   );
    // }
    // restaurants 
    function handleDeleteRestaurant(deletedRestaurant) {
        setRestaurants((restaurants) =>
        restaurants.filter((restaurant) => restaurant.id !== deletedRestaurant.id)
      );
    }
  return(
    <>
      <main>
        <NewRestaurantForm onAddSpice={handleAddRestaurants} />
        <section className="spice-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            //   onUpdateSpice={handleUpdateSpice}
              onDeleteSpice={handleDeleteRestaurant}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default RestaurantContainer;
