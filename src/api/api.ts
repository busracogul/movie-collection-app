import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
});

export async function fetchListMovies(page: number) {
  const response = await instance.get(
    `/3/discover/movie?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
}

export async function fetchSearchMovies(query: string, page: number) {
  const response = await instance.get(
    `/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
}
