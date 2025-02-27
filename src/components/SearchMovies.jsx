import { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  // states- input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovie] = useState([]);

  // Async porque vamo fazer uma requisição a uma API
  // (e) para previnir o comportamento padrão do formulário
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=50250b3bbd57027ed0d1e825c7e67123&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovie(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {" "}
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>

        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // e = evento; target = elemento que acionou o evento; value = valor do elemento
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
