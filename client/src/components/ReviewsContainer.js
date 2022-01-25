import React, { useEffect } from "react"
import ReviewCard from "./ReviewCard"
import NewReviewForm from "./NewReviewForm"



function  ReviewsContainer(){
const [cafes, setCafes] = useState([])

    useEffect(() => {
        fetch("")
        .then((r) => r.json())
        .then((cafes) => setCafes(cafes));
    }, [])

    return(
        <main>
            <ReviewCard></ReviewCard>
        </main>
    )
}

export default ReviewsContainer