import React from "react";

const Filter = ({ filter, setFilter }) => {
  function setSort(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status: </p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Not completed</option>
          </select>
        </div>
      </div>
      <div>
        <p>Alphabetical Order</p>
        <button onClick={() => setSort("Up")}> Up</button>
        <button onClick={() => setSort("Down")}> Down </button>
      </div>
    </div>
  );
};

export default Filter;
