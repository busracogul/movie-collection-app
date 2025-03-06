import MovieCard from "./MovieCard";
import InputSearch from "../InputSearch";
import "../../App.css";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import { fetchListMovies, fetchSearchMovies } from "../../api/api";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import PaginationSection from "../PaginationSection";
import DialogSection from "../DialogSection";

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
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function getListMovies(page: number) {
      try {
        if (isSearching) return;

        const fetchedListMovies = await fetchListMovies(page);
        setMovies(fetchedListMovies.results);
        setFilteredMovies(fetchedListMovies.results);
        setTotalPages(fetchedListMovies.total_pages);
      } catch (err) {
        console.log(err);
      }
    }
    getListMovies(currentPage);
  }, [currentPage, isSearching]);

  const debouncedSearch = useCallback(
    debounce(async (value: string, page: number) => {
      if (value.trim() === "") {
        setIsSearching(false);
        setFilteredMovies(movies);
        return;
      }

      setIsSearching(true);
      try {
        const searchResults = await fetchSearchMovies(value, page);
        setFilteredMovies(searchResults.results);
        setTotalPages(searchResults.total_pages);
      } catch (err) {
        console.log(err);
      }
    }, 1000),
    [movies]
  );

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
    debouncedSearch(value, 1);
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
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
              lg={{ span: 6, offset: 1 }}
              style={{ marginTop: "3rem" }}
              onClick={() => setSelectedMovie(movie)}
            >
              <MovieCard
                movieTitle={movie.title}
                imgSrc={movie.poster_path}
                imdbId={movie.id}
                onClick={() => {
                  setSelectedMovie(movie);
                }}
              />
            </Col>
          ))}
        </Row>

        <PaginationSection
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={(page) => {
            setCurrentPage(page);
            if (isSearching) {
              debouncedSearch(searchValue, page);
            }
          }}
        />
        {selectedMovie && (
          <DialogSection
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </>
  );
}
