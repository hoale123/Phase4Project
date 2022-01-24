
import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import Header from './Header'
import ListingsContainer from "./ListingsContainer";
// import './App.css';



function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
<Header onSearch={setSearch} />
<ListingsContainer
        listings={displayedListings}
        // onRemoveListing={handleRemoveListing}
      />
      

    </div>
  );
}

export default App;
