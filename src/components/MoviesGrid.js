import { useEffect, useState } from "react";
import { useLocation } from "react-router";
 import { get } from "../utils/httpClient"; 
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";


function useQuery(){
  return new URLSearchParams(useLocation().search)
}
function MoviesGrid(){
   const [movies, setMovies] = useState([]);
    const query = useQuery();
    const search = query.get("search")
    
    useEffect(() => {
    const searchUrl = search ? "/search/movie?query=" + search : "discover/movie" 
    /* fetchPost(searchUrl) */
    get(searchUrl).then((data) => {
      setMovies(data.results);})
  },[search]);
     
 return (
        <ul className={styles.moviesGrid}>
            {movies.map(elem => <MovieCard key={elem.id} movie={elem} addToFav={true}/>
            )}
        </ul>
    )
}

export default MoviesGrid