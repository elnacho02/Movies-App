import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
function MoviesGrid(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
    
    
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(elem => <MovieCard key={elem.id} movie={elem} />
            )}
        </ul>
    )
}

export default MoviesGrid;