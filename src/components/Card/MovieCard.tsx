import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useStore } from "../../store/store";

interface MovieCardProps {
  imgSrc: string;
  movieTitle: string;
  imdbId: number;
  onClick: () => void;
}

export default function MovieCard({
  imgSrc,
  movieTitle,
  imdbId,
  onClick,
}: MovieCardProps) {
  const { addFavorite, removeFavorite, favorites } = useStore();

  const isFavorite = favorites?.some((fav) => fav.imdbId === imdbId);

  function handleFavoriteClick(event: React.MouseEvent) {
    event.stopPropagation();

    if (isFavorite) {
      removeFavorite(imdbId);
    } else {
      addFavorite({ imgSrc, movieTitle, imdbId });
    }
  }

  return (
    <Card
      hoverable
      onClick={() => {
        console.log("lütfen gellll", imdbId);
        onClick();
      }}
      style={{ position: "relative", cursor: "pointer" }}
      cover={
        <div style={{ position: "relative" }}>
          <img
            alt={movieTitle}
            style={{
              height: "320px",
              objectFit: "fill",
              filter: "blur(3px)",
              width: "100%",
            }}
            src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          />
          <img
            alt={movieTitle}
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
      <h3 className="text-lg font-medium">{movieTitle}</h3>
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
        {isFavorite ? (
          <HeartFilled style={{ fontSize: "1.2rem" }} />
        ) : (
          <HeartOutlined style={{ fontSize: "1.2rem" }} />
        )}
      </Button>
    </Card>
  );
}
