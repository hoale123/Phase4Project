import React from "react"


function Search() {
    return (
        <form className="searchbar" >
          <input
            type="text"
            id="search"
            placeholder="search for Cafes"
            />
          <button type="submit">🔍</button>
        </form>
      );
    }

    export default Search;