import React, { useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import NewRestaurantForm from "./NewRestaurantForm"



function  RestaurantsContainer(){
const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        fetch("/restaurant")
        .then((r) => r.json())
        .then((restaurant) => setRestaurant(restaurant));
    }, [])

    return(
        <main>
            <RestaurantCard></RestaurantCard>
        </main>
    )
}

export default RestaurantsContainer