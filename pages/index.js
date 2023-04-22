import { useState } from 'react';
import Card from '../components/Card';

export default function Home() {
  const [type, setType] = useState('buying');
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    // Disable SSL/TLS certificate validation
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const url = `https://urchin-app-cps4w.ondigitalocean.app/search?type=${type}&keyword=${encodeURIComponent(keyword)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">EXSA Market Search</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-wrap gap-4">
          <div className="flex-1">
              <label htmlFor="keyword" className="sr-only">Keyword:</label>
              <input type="text" name="keyword" id="keyword" value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Enter a keyword and press Search" className="w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex-2">
              <label htmlFor="type" className="sr-only">Type:</label>
              <select name="type" id="type" value={type} onChange={(event) => setType(event.target.value)} className="w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="buying">Buying</option>
                <option value="selling">Selling</option>
              </select>
            </div>
            
            <div className="flex-none">
              <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
            </div>
          </div>
        </form>
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result) => (
              <Card
                key={result.id}
                item={result.item}
                price={result.price}
                payment={result.payment}
                specific={result.specific}
                type={result.type}
                quantity={result.quantity}
                collateral={result.collateral}
                link = {result.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}