import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import InputSearch from "../InputSearch";
import "../../App.css";
import { Col, Row } from "antd";
import styles from "./styles.module.css";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieProps {
  Search: Movie[];
}

export default function MovieCardList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const API_KEY = import.meta.env.VITE_APIKEY;
  const BASE_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

  async function getMovie() {
    const response = await fetch(BASE_URL);
    const movieData: MovieProps = await response.json();

    if (movieData.Search) {
      setMovies(movieData.Search);
    }

    return movieData;
  }

  useEffect(() => {
    getMovie();
  }, [searchValue]);

  return (
    <>
      <InputSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Row className={styles.row}>
        {movies.map((movie) => (
          <Col
            key={movie.imdbID}
            sm={{ span: 12, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 3 }}
            style={{ marginTop: "3rem" }}
          >
            <MovieCard
              movieTitle={movie.Title}
              imgSrc={movie.Poster}
              imdbId={movie.imdbID}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
