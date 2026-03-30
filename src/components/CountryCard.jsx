import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="countryCard">
      <img src={country.png} alt={country.common} />
      <h3>{country.common}</h3>
    </div>
  );
}

export default CountryCard;
