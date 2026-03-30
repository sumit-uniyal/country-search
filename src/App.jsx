import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, []);

  useEffect(() => {
    const result = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(result);
  }, [search, countries]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="countriesContainer">
        {filteredCountries.length === 0 ? (
          <p>No countries found</p>
        ) : (
          filteredCountries.map((country, index) => (
            <div key={index} className="countryCard">
              <img src={country.flags.png} alt={country.name.common} />

              <h2>{country.name.common}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
