import './App.css';
import React, { useState, useEffect } from 'react';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from your API or use the sample data
    // For simplicity, we'll use the sample data here
    setData(/* Your data here */
      [
        {
          "id": 1,
          "name": "Jaro",
          "monday": "10 - 16",
          "tuesday": "17 - F",
          "wednesday": "Off",
          "thursday": "17 - F",
          "friday": "17 - F",
          "saturday": "17 - F",
          "sunday": "14 - F"
        },
        {
          "id": 2,
          "name": "Isaac",
          "monday": "16 - F",
          "tuesday": "10 - 17",
          "wednesday": "10 - 17",
          "thursday": "10 - 17",
          "friday": "10 - 17",
          "saturday": "Off",
          "sunday": "Off"
        },
        {
          "id": 3,
          "name": "Onur",
          "monday": "13 - F",
          "tuesday": "Off",
          "wednesday": "Off",
          "thursday": "Off",
          "friday": "16 - F",
          "saturday": "Off",
          "sunday": "Off"
        },
        {
          "id": 4,
          "name": "Renato",
          "monday": "Off",
          "tuesday": "Off",
          "wednesday": "17 - F",
          "thursday": "Off",
          "friday": "Off",
          "saturday": "16 - F",
          "sunday": "16 - F"
        },
        {
          "id": 5,
          "name": "Thabo",
          "monday": "Off",
          "tuesday": "Off",
          "wednesday": "Off",
          "thursday": "Off",
          "friday": "Off",
          "saturday": "10 - 17",
          "sunday": "10 - 16"
        },
        // ... (other agent entries)
      ]

    );
  }, []);

  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (user === 'covebar' || user === 'Covebar' || user === 'COVEBAR') {
      setSuccess(true);
    }

  }

  return (
    <div className="App">
      <h1>Roster for this week.</h1>
      <div className="info">You need to insert the proper password to view this roster.</div>
      <div>{success ? (
        <Table data={data} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='password'
            autoComplete='off'
            value={user}
            required
            onChange={(event) => { setUser(event.target.value) }}
          />
          <button>View Roster</button>
        </form>
      )
      }

      </div>
    </div>
  );
}

export default App;
