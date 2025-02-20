import { HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";

interface ImageProps {
  imgSrc: string;
  movieTitle: string;
  imdbId: string;
}

export default function MovieCard({ imgSrc, movieTitle, imdbId }: ImageProps) {
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
          <HeartOutlined style={{ fontSize: "2rem" }} />
        </div>
      </Card>
    </>
  );
}
