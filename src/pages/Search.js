import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  .search_bar {
      display : flex;
      justify-content : center;
    input {
      width: calc(100% - 40px);
      line-height : 40px;
    }
  }
`;

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContainer>
      <div className="search_bar">
        <input
          type="text"
          placeholder="요리명을 입력해주세요."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </SearchContainer>
  );
};

export default Search;

