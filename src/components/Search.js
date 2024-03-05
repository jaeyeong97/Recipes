import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 20px;
  .search_bar {
    display: flex;
    justify-content: center;
    input {
      width: calc(100% - 40px);
      line-height: 40px;
      padding-left: 40px;
      color: #333;
      &:focus {
        outline: none;
      }
    }
  }
`;
const BtnBack = styled.button`
  position: absolute;
  top: 10px;
  left: 25px;
  width : 25px;
  height : 25px;
  background-image: url(/assets/arrow-back.png);
  background-size: 100% auto;
`;
const Search = ({ search, onChange, onClick, goPrev }) => {
  return (
    <SearchContainer>
      <div className="search_bar">
        <input
          type="text"
          placeholder="요리명을 입력해주세요."
          value={search}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
      <BtnBack onClick={() => {goPrev()}}></BtnBack>
    </SearchContainer>
  );
};

export default Search;
