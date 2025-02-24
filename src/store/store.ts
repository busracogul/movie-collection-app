import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MovieProps {
  imdbId: number;
  imgSrc: string;
  movieTitle: string;
}

interface StoreProps {
  favorites: MovieProps[];
  addFavorite: (movie: MovieProps) => void;
  removeFavorite: (imdbId: number) => void;
}

export const useStore = create<StoreProps>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (movie) =>
        set((state) => ({ favorites: [...state.favorites, movie] })),
      removeFavorite: (imdbId) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.imdbId !== imdbId),
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);
