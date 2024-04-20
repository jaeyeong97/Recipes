import Search from "../../components/Search";
import SearchItem from "./SearchItem";
import styled from "styled-components";

const SearchPageWrap = styled.div`
`;
const SearchPage = ({ search, recipes, handleSearch, onClick, goPrev }) => {
  // 검색창 필터링 함수
  const filterSearch = () => {
    return search === ""
      ? []
      : recipes.filter((it) =>
        // 레시피명 혹은 레시피 재료에 맞게 검색
        it.RCP_PARTS_DTLS.toLowerCase().includes(search.toLowerCase()) || it.RCP_NM.toLowerCase().includes(search.toLowerCase())
      );
  };
  return (
    <SearchPageWrap>
      <Search search={search} onChange={handleSearch} onClick={onClick} goPrev={goPrev} />
      {filterSearch().map((it) => (
        <SearchItem key={it.RCP_SEQ} {...it} />
      ))}
    </SearchPageWrap>
  );
};

export default SearchPage;
