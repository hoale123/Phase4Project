import React from "react"


function RestaurantCard() {
    




    return (
        <li className="card">
          <div className="image">
            <img src alt />
          </div>
          <div className="details">
           
              <button
                
                className="emoji-button favorite active"
              >
                ★
              </button>
            
              <button
                
                className="emoji-button favorite"
              >
                ☆
              </button>
            
            <strong></strong>
            <span> · </span>
            <button className="emoji-button delete">
              🗑
            </button>
          </div>
        </li>
      );
}

export default RestaurantCard;