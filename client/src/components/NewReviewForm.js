import react from "react"


function NewReviewForm(){





    return (
        <form >
          <label htmlFor="name"> Name: </label>
          <input 
            type="text"
            id="name"
            />
          <label htmlFor="review">Description:</label>
          <input
            type="text"
            id="review"
          />
          <label htmlFor="image">image:</label>
          <input
            type="text"
            id="image"
          />
          <label htmlFor="location">location:</label>
          <input
            type="text"
            id="location"
          />
          <button type="submit">Add Review</button>
        </form>
      );
}

export default NewReviewForm