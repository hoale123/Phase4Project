import react from "react"


function NewReviewForm(){
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
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