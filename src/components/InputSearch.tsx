import { Input } from "antd";

interface InputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function InputSearch({ searchValue, setSearchValue }: InputProps) {
  return (
    <>
    <h1>Welcome to the Movie Collection App! 🎬🍿</h1>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search for movies by name... (E.g., Game Of Thrones, Titanic, The Godfather)"
      />
    </>
  );
}

export default InputSearch;
