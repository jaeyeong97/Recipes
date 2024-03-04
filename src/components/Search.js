import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  max-width : 700px;
  margin : 0 auto;
  padding-bottom : 20px;
  .search_bar {
      display : flex;
      justify-content : center;
    input {
      width: calc(100% - 40px);
      line-height : 40px;
    }
  }
`;

const Search = ({ search, setSearch, onclick }) => {

  return (
    <SearchContainer>
      <div className="search_bar">
        <input
          type="text"
          placeholder="요리명을 입력해주세요."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={onclick}
        />
      </div>
    </SearchContainer>
  );
};

export default Search;

