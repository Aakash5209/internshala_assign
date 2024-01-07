// ItemList.js

import React, { useState, useEffect } from 'react';

const ItemList = () => {
  // State to store the fetched items
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setItems(data); // Update the state with the fetched items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []); // The empty dependency array ensures the effect runs only once (on mount)

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {/* Map through the items and render them in a list */}
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
