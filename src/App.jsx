import SearchMovies from "./components/SearchMovies";
import ThemeOption from "./components/ThemeOption";

function App() {
  return (
    <div className="container">
      <div className="theme-options">
        <ThemeOption theme="dark" />
        <ThemeOption theme="light" />
        <ThemeOption theme="purple" />
      </div>
      <h1 className="title">Buscador de Filmes em React</h1>

      <SearchMovies />
    </div>
  );
}

export default App;
