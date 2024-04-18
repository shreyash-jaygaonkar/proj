import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file



const HorizontalScaleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data'); // Replace URL with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="horizontal-scale">
    {data.map(item => (
      <div key={item._id} className="horizontal-bar">
        {item.ts} - {item.vibration}
      </div>
    ))}
  </div>
  );
}
  
export default HorizontalScaleComponent;
