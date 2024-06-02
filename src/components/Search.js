import styled from "styled-components";

const SearchContainer = styled.div`
max-width: 500px;
margin: 40px auto;
.search_bar {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 20px;
    input {
      width: 100%;
      padding: 15px 35px;
      border-radius: 4px;
      border: 1px solid rgb(189, 189, 189);
      font-size: 12px;
      color: #000;
      &:focus {
        outline: 1px solid rgba(44, 108, 21, 0.5);
        border: 1px solid transparent;
      }
      &::placeholder {
        font-size: 12px;
      }
    }
  }
`;
const BtnBack = styled.button`
  position: absolute;
  top: 12px;
  left: 8px;
  width : 25px;
  height : 25px;
  span {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    color: rgb(88, 88, 88);
  }
`;

const BtnSearch = styled.button`
  position: absolute;
  top: 12px;
  right: 8px;
  width: 25px;
  height: 25px;
  span {
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    color: rgb(88, 88, 88);
  }
`;

const Search = ({ search, onChange, goPrev, onKeyDown, onSearchClick }) => {
  return (
    <SearchContainer>
      <div className="search_bar">
        <input
          type="text"
          placeholder="레시피를 검색해보세요."
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <BtnBack onClick={() => { goPrev() }}>
          <span className="material-symbols-outlined">
            close
          </span>
        </BtnBack>
        <BtnSearch onClick={onSearchClick}>
          <span className="material-symbols-outlined">
            search
          </span>
        </BtnSearch>
      </div>
    </SearchContainer>
  );
};

export default Search;
