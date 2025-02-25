import MovieCard from "./MovieCard";
import InputSearch from "../InputSearch";
import "../../App.css";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import { fetchListMovies } from "../../api/api";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function MovieCardList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getListMovies() {
      try {
        const fetchedListMovies = await fetchListMovies();
        const fetchData = fetchedListMovies.results;
        setMovies(fetchData);
        setFilteredMovies(fetchData);
      } catch (err) {
        console.log(err);
      }
    }
    getListMovies();
  }, []);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }, 2000),
    [movies]
  );

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <>
      <InputSearch
        searchValue={searchValue}
        setSearchValue={handleSearchInput}
      />
      <Row className={styles.row}>
        {filteredMovies.map((movie) => (
          <Col
            key={movie.id}
            sm={{ span: 12, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 3 }}
            style={{ marginTop: "3rem" }}
          >
            <MovieCard
              movieTitle={movie.title}
              imgSrc={movie.poster_path}
              imdbId={movie.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
