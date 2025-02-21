import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useStore } from "../../store/store";

interface ImageProps {
  imgSrc: string;
  movieTitle: string;
  imdbId: string;
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
          <img
            alt="example"
            style={{ height: "350px", objectFit: "fill" }}
            src={imgSrc}
          />
        }
      >
        <div style={{ height: "7.5rem" }}>
          <h3>{movieTitle}</h3>
          <p>{imdbId}</p>
          <Button onClick={handleFavoriteClick}>
            {favorites?.some((fav) => fav.imdbId === imdbId) ? (
              <>
                <HeartFilled
                  style={{ fontSize: "1.2rem", marginRight: "4px" }}
                />
                Unfavorite
              </>
            ) : (
              <>
                <HeartOutlined
                  style={{ fontSize: "1.2rem", marginRight: "4px" }}
                />{" "}
                Favorite
              </>
            )}
          </Button>
        </div>
      </Card>
    </>
  );
}
