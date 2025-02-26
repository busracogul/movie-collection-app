import MovieCard from "./MovieCard";
import InputSearch from "../InputSearch";
import "../../App.css";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import { fetchListMovies } from "../../api/api";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import PaginationSection from "../PaginationSection";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getListMovies(page: number) {
      try {
        const fetchedListMovies = await fetchListMovies(page);
        setMovies(fetchedListMovies.results);
        setFilteredMovies(fetchedListMovies.results);
        setTotalPages(fetchedListMovies.total_pages);
      } catch (err) {
        console.log(err);
      }
    }
    getListMovies(currentPage);
  }, [currentPage]);

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
      <Row className={styles.row} style={{ marginBottom: "3rem" }}>
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
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
