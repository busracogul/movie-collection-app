import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useStore } from "../../store/store";

interface ImageProps {
  imgSrc: string;
  movieTitle: string;
  imdbId: number;
}

export default function MovieCard({ imgSrc, movieTitle, imdbId }: ImageProps) {
  const { addFavorite, removeFavorite, favorites } = useStore();

  function handleFavoriteClick() {
    if (favorites?.some((fav) => fav.imdbId === imdbId)) {
      removeFavorite(imdbId);
    } else {
      addFavorite({ imgSrc, movieTitle, imdbId });
    }
  }

  return (
    <>
      <Card
        hoverable
        cover={
          <div style={{ marginInline: "0", position: "relative" }}>
            <img
              alt="example"
              style={{
                height: "320px",
                objectFit: "fill",
                filter: "blur(3px)",
                width: "100%",
              }}
              src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
            />
            <img
              alt="example"
              style={{
                height: "280px",
                objectFit: "contain",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
            />
          </div>
        }
      >
        <div>
          <h3>{movieTitle}</h3>
          <p
            style={{
              position: "absolute",
              left: "4px",
              top: "4px",
              backgroundColor: "#f0f0f0",
              padding: "2px 4px",
              borderRadius: "4px",
              fontStyle: "italic",
            }}
          >
            {imdbId}
          </p>
          <Button
            onClick={handleFavoriteClick}
            style={{ right: "4px", position: "absolute", top: "4px" }}
          >
            {favorites?.some((fav) => fav.imdbId === imdbId) ? (
              <>
                <HeartFilled style={{ fontSize: "1.2rem" }} />
              </>
            ) : (
              <>
                <HeartOutlined style={{ fontSize: "1.2rem" }} />{" "}
              </>
            )}
          </Button>
        </div>
      </Card>
    </>
  );
}
