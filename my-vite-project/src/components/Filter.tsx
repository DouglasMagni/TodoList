import React from "react";

function Filter() {
  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status: </p>
          <select>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Not completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
