import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // Puedes usar Tailwind o CSS clásico

const Sidebar = ({ sites, onSelectSite }) => {
  const [selectedCountry, setSelectedCountry] = useState('All');

  // Obtener lista única de países
  const countries = ['All', ...new Set(sites.map(site => site.country))];

  // Filtrar los sitios según país
  const filteredSites = selectedCountry === 'All'
    ? sites
    : sites.filter(site => site.country === selectedCountry);

  return (
    <div className="sidebar">
      <h2>🌍 GeoExplorer</h2>

      <label>Filter by Country:</label>
      <select
        value={selectedCountry}
        onChange={e => setSelectedCountry(e.target.value)}
      >
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      <ul className="site-list">
        {filteredSites.map((site, index) => (
          <li key={index}>
            <button onClick={() => onSelectSite(site)}>
              {site.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;