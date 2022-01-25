import React, { useEffect } from "react"
import ReviewCard from "./ReviewCard"
import NewReviewForm from "./NewReviewForm"



function  ReviewsContainer(){
const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        fetch("/restaurant")
        .then((r) => r.json())
        .then((restaurant) => setRestaurant(restaurant));
    }, [])

    return(
        <main>
            <ReviewCard></ReviewCard>
        </main>
    )
}

export default ReviewsContainer