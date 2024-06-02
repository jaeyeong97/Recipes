import { useState } from "react";
import Search from "../../components/Search";
import SearchItem from "./SearchItem";
import styled from "styled-components";

const SearchPageWrap = styled.div`
margin-top: 150px;
.results {
  color: #222;
  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-top: 10px;
    border-bottom: 1px solid rgb(224, 224, 224);
  }
}
`;
const SearchWrap = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding: 0 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const SearchPage = ({ recipes, setShowSearch, setFavorite, handleFavoriteFunction, favoriteArr }) => {

  const [search, setSearch] = useState(""); // 검색 데이터
  const [results, setResults] = useState(recipes.slice(100, 120)); // 검색 결과 출력
  const [isSearched, setIsSearched] = useState(false); // 검색 실행 여부

  // 검색 타이핑
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 뒤로가기 버튼
  const goPrev = () => {
    setSearch("");
    setResults(recipes.slice(100, 120));
    setIsSearched(false);
  };


  // 검색 실행
  const handleSearchExecute = () => {
    const filtered = search === "" ? [] : recipes.filter((recipe) =>
      recipe.RCP_NM.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
    setIsSearched(true);
  };

  // 엔터 키 이벤트 핸들러
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchExecute();
    }
  };

  return (
    <SearchPageWrap>
      <Search
        search={search}
        onChange={onChangeSearch}
        goPrev={goPrev}
        onKeyDown={handleKeyDown}
        onSearchClick={handleSearchExecute}
      />
      {isSearched ? <p className="results">{results.length}개의 레시피가 검색되었습니다.</p> : <p className="results"></p>}
      <SearchWrap>
        {results.map((recipe) => (
          <SearchItem key={recipe.RCP_SEQ} {...recipe}
            setShowSearch={setShowSearch}
            setFavorite={setFavorite}
            handleFavoriteFunction={handleFavoriteFunction}
            favoriteArr={favoriteArr}
          />
        ))}
      </SearchWrap>
    </SearchPageWrap>
  );
};

export default SearchPage;
