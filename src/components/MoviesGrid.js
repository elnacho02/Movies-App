import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import {get2} from "../utils/get2"
function MoviesGrid({addToFav}){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
     
 return (
        <ul className={styles.moviesGrid}>
            {movies.map(elem => <MovieCard key={elem.id} movie={elem} addToFav={addToFav}/>
            )}
        </ul>
    )
}

export default MoviesGrid;