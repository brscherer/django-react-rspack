import React from "react"
import './App.css';

const App = () => {
  const [anime, setAnime] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = () => {
    fetch(`http://127.0.0.1:8000/api/anime/${search}`)
      .then(response => response.json())
      .then(data => {
        setAnime(data.data);
      });
  }

  return (
    <div className="content">
      <h1>Search Anime:</h1>

      <input type="text" name="search" className="search-input" placeholder="Search anime..." onChange={handleChange} />
      <button onClick={handleSearch} className="search-button">Search</button>

      {anime.length === 0 ? <p className="empty-state">No results</p> : (
        <ul className="list">
          {anime.map((item: any) => (
            <li key={item.mal_id} className="card">
              <img src={item.images.jpg.image_url} alt={item.title} className="card-img" />
              <h2 className="card-title">{item.title}</h2>
            </li>
          ))}
        </ul>

      )}

    </div>
  );
};

export default App;
