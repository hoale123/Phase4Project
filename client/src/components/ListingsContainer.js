import React from "react";
import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import Header from "./Header";

function ListingsContainer({ onRemoveListing, user }) {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  // const displayedListings = listings.filter((listing) =>
  //   listing.description.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <main>
      <ul className="cards">
      <Header onSearch={setSearch} />
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onRemoveListing={onRemoveListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
