import React, { useEffect, useState } from "react";

export default function StockSearchDashboard() {
  const [symbols, setSymbols] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Use your useEffect code to fetch all symbols when component loads
  useEffect(() => {
    fetch('/api/indian-symbols')
      .then(res => res.json())
      .then(data => setSymbols(data)) // Fetch all, no slice needed
      .catch(err => setError("Error fetching data: " + err.message));
  }, []);

  // Filter the stocks according to search input
  const filtered = symbols.filter(
    stock =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
      stock.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Indian Stock Search</h2>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Type name or symbol..."
        style={{ marginBottom: "1em", padding: "8px", width: "250px" }}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Description</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {filtered.slice(0, 50).map(stock => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.description}</td>
              <td>{stock.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

