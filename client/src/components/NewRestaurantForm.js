import { useState } from "react";

const initialState = {
  name: "",
  image: "",
  location: "",
  description: "",
};

function NewRestaurantForm({ onAddSpice }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newSpice) => {
        setFormData(initialState);
        onAddSpice(newSpice);
      });
  }

  return (
    <div className="card">
      <h2>New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title: </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        {/* <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewRestaurantForm;
