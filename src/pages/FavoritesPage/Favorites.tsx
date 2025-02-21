import { Col, Row } from "antd";
import MovieCard from "../../components/Card/MovieCard";
import { useStore } from "../../store/store";

export default function Favorites() {
  const { favorites } = useStore();

  return (
    <>
      <h2>Favorite Movies</h2>
      <Row style={{ justifyContent: "center" }}>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Col
              key={movie.imdbId}
              sm={{ span: 12, offset: 1 }}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 1 }}
              style={{ marginTop: "3rem" }}
            >
              <MovieCard
                imgSrc={movie.imgSrc}
                movieTitle={movie.movieTitle}
                imdbId={movie.imdbId}
              />
            </Col>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </Row>
    </>
  );
}
