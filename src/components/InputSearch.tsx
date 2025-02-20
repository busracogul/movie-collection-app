import { Input } from "antd";

interface InputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

function InputSearch({ searchValue, setSearchValue }: InputProps) {
  return (
    <>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search for movies.."
      />
    </>
  );
}

export default InputSearch;
