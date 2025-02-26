import { Input } from "antd";

interface InputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function InputSearch({ searchValue, setSearchValue }: InputProps) {
  return (
    <>
      <h1 className="text-2xl text-gray-300 font-bold text-center">
        Welcome to the Movie Collection App! 🎬🍿
      </h1>
      <div className="flex justify-center items-center">
        <Input
          style={{ width: "600px" ,marginTop:"0.6rem"}}
          size="large"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search for movies by name... (E.g., Game Of Thrones, Titanic, The Godfather)"
        />
      </div>
    </>
  );
}

export default InputSearch;
