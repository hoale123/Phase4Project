import React from "react"
import ReviewCard from "./ReviewCard"
import NewReviewForm from "./NewReviewForm"
import Header from "./Header";



function  ReviewsContainer(){

    const [review, setReview] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() =>{
        fetch("/restaurants")
        .then((r) => r.json())
        .then(setReview);
    }, []);

    return(
        <main>
            <Header
            onSearch={setSearch} 
            />
            <ReviewCard
                review={review}
                key={review.id}
                onRemoveListing={onRemoveListing}
            />
        </main>
    )
}

export default ReviewsContainer