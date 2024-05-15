import React, { useState } from "react";
import "./App.css";

function StockSearchApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSearch = async () => {
    setIsLoading(true); // Set loading state to true

    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/stocks?date=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const responseData = await response.json();
      setFetchedData(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Setting loading state to false regardless of success or failure
    }
  };

  const renderSearchResults = () => {
    if (fetchedData.length > 0) {
      return (
        <div>
          {fetchedData.map((item, index) => (
            <ul key={index} data-testid="stock-data">
              <li>Open: {item.open}</li>
              <li>Close: {item.close}</li>
              <li>High: {item.high}</li>
              <li>Low: {item.low}</li>
            </ul>
          ))}
        </div>
      );
    } else {
      return <div data-testid="no-result">No Results Found</div>;
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          data-testid="app-input"
          className="search-box input form-control"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter date (5-January-2000)"
        />
        <button
          data-testid="submit-button"
          className="button search-button btn btn-primary"
          disabled={isLoading} // Disable button while loading
          onClick={handleSearch}
        >
          {isLoading ? "Loading..." : "Search"}
          {/* Show loading text while searching*/}
        </button>
      </div>

      {fetchedData.length > 0 || isLoading ? ( // Show results or loading indicator
        <div>
          {isLoading && <div>Fetching data...</div>}{" "}
          {/* Show loading message if fetching */}
          {renderSearchResults()}
        </div>
      ) : null}
    </div>
  );
}

export default StockSearchApp;
