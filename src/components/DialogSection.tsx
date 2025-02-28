import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DialogSectionProps {
  movie: {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    popularity: number;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    vote_count: number;
  };
  onClose: () => void;
}

export default function DialogSection({ movie, onClose }: DialogSectionProps) {
  return (
    <Dialog open={!!movie} onOpenChange={onClose}>
      <DialogContent className="dialog-wrapper max-w-2xl bg-gray-900 text-white rounded-xl shadow-lg relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-6xl text-white hover:text-gray-400"
        ></button>
        <div
          className="w-full h-64 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        />
        <div className="mt-4 space-y-3">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold">
              {movie.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-400 text-sm">
            Original Title:{" "}
            <span className="text-white">{movie.original_title}</span>
          </p>
          <p className="text-gray-400 text-sm">
            Language:{" "}
            <span className="text-white">{movie.original_language}</span>
          </p>
          <p className="text-gray-400 text-sm">
            Release Date:{" "}
            <span className="text-white">{movie.release_date}</span>
          </p>
          <p className="text-gray-400 text-sm">
            Vote Average:{" "}
            <span className="text-yellow-400 font-semibold">
              {movie.vote_average}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            Vote Count: <span className="text-white">{movie.vote_count}</span>
          </p>
          <p className="text-gray-400 text-sm">
            Popularity:{" "}
            <span className="text-green-400 font-semibold">
              {movie.popularity.toFixed(0)}
            </span>
          </p>

          <DialogDescription className="text-gray-400 text-sm">
            Overview:  <span className="text-white">{movie.overview}</span>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
