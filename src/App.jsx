import React, { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';

const API =
  'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch Countries
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error('API Error:', err)); // ✅ Error handling
  }, []);

  // Filter Logic
  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />

      <div className="grid">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
