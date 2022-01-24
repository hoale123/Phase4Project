import React from "react"


function ReviewCard() {
    




    return (
        <li className="card">
          <div className="image">
            <span className="price">$0</span>
            <img src={image} alt={description} />
          </div>
          <div className="details">
            {isFavorited ? (
              <button
                onClick={() => setIsFavorited(false)}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button
                onClick={() => setIsFavorited(true)}
                className="emoji-button favorite"
              >
                ☆
              </button>
            )}
            <strong>{description}</strong>
            <span> · {location}</span>
            <button onClick={handleDelete} className="emoji-button delete">
              🗑
            </button>
          </div>
        </li>
      );
}

export default ReviewCard;