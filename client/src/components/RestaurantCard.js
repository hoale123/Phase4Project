
function RestaurantCard({ restaurant, onUpdateSpice, onDeleteSpice }) {
  const { id, image, name, description,location } = restaurant;

  // function handleUpdateRating(pct) {
  //   const newRating = pct * 5;
  //   fetch(`/spices/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ rating: newRating }),
  //   })
  //     .then((r) => r.json())
  //     .then(onUpdateSpice);
  // }

  function handleDeleteSpice() {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteSpice(restaurant);
      }
    });
  }

  return (
    <div className="restaurant-item card">
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Location: <em>{location}</em>
        </p>
        {/* <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div> */}
        <p>
          <button onClick={handleDeleteSpice}>Delete Restaurant</button>
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
