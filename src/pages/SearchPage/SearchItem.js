import { useEffect, useState } from "react";
import ItemModal from "../HomePage/ItemModal";
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 100%;
`;
const ItemBox = styled.div`
  width: 100%;
  padding: 30px 0;
`;
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 250px;
    object-fit:cover;
    transition: 0.2s;
  }
  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.7);
  }
  &:hover::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
  }
`;
const TxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span{
    font-size: 12px;
    text-align: center;
    color: #888;
  }
  .name{
    font-size : 14px;
    font-weight : 600;
    color: #111;
  }
  @media (min-width: 768px) {

  }

`;
const SearchItem = ({
  RCP_SEQ,
  ATT_FILE_NO_MAIN,
  ATT_FILE_NO_MK,
  RCP_NM,
  RCP_PAT2,
  RCP_WAY2,
  INFO_WGT,
  INFO_ENG,
  INFO_CAR,
  INFO_PRO,
  INFO_FAT,
  RCP_PARTS_DTLS,
  MANUAL01,
  MANUAL02,
  MANUAL03,
  MANUAL04,
  MANUAL05,
  MANUAL06,
  MANUAL_IMG01,
  MANUAL_IMG02,
  MANUAL_IMG03,
  MANUAL_IMG04,
  MANUAL_IMG05,
  MANUAL_IMG06,
  RCP_NA_TIP,
  setShowSearch,
  setFavorite,
  handleFavoriteFunction,
  favoriteArr,
}) => {

  const [showMenu, setShowMenu] = useState(false); // 검색 리스트 모달 표시

  // 헤더 검색아이콘 클릭
  const handleSearch = () => {
    setShowMenu(false);
    setFavorite(false);
    setShowSearch(true);
    window.scrollTo(0, 0);
  };

  // 헤더 로고 클릭
  const handleTitle = () => {
    setShowSearch(false);
    setShowMenu(false);
    setFavorite(false);
    window.scrollTo(0, 0);
  }

  // 헤더 즐겨찾기 클릭
  const handleFavorite = () => {
    setShowMenu(false);
    setShowSearch(false);
    setFavorite(true);
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  //모달 열릴 시 스크롤 설정
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const isFavorite = favoriteArr.some(fav => fav.RCP_SEQ === RCP_SEQ);

  return (
    <SearchWrap >
      <ItemBox>
        <ImgWrap>
          <img
            src={ATT_FILE_NO_MAIN}
            alt="음식 이미지"
            onClick={() => handleMenuClick()}
          />
        </ImgWrap>
        <TxtWrap>
          <span className="name">{RCP_NM}</span>
          <span>#{RCP_WAY2} #{RCP_PAT2}</span>
        </TxtWrap>
      </ItemBox>
      {showMenu && (
        <ItemModal
          RCP_SEQ={RCP_SEQ}
          RCP_NM={RCP_NM}
          ATT_FILE_NO_MK={ATT_FILE_NO_MK}
          RCP_PAT2={RCP_PAT2}
          RCP_WAY2={RCP_WAY2}
          INFO_WGT={INFO_WGT}
          INFO_ENG={INFO_ENG}
          INFO_CAR={INFO_CAR}
          INFO_PRO={INFO_PRO}
          INFO_FAT={INFO_FAT}
          RCP_PARTS_DTLS={RCP_PARTS_DTLS}
          MANUAL01={MANUAL01}
          MANUAL02={MANUAL02}
          MANUAL03={MANUAL03}
          MANUAL04={MANUAL04}
          MANUAL05={MANUAL05}
          MANUAL06={MANUAL06}
          MANUAL_IMG01={MANUAL_IMG01}
          MANUAL_IMG02={MANUAL_IMG02}
          MANUAL_IMG03={MANUAL_IMG03}
          MANUAL_IMG04={MANUAL_IMG04}
          MANUAL_IMG05={MANUAL_IMG05}
          MANUAL_IMG06={MANUAL_IMG06}
          RCP_NA_TIP={RCP_NA_TIP}
          handleSearch={handleSearch}
          handleFavorite={handleFavorite}
          handleTitle={handleTitle}
          setShowMenu={setShowMenu}
          handleFavoriteFunction={handleFavoriteFunction}
          isFavorite={isFavorite}
        />
      )}
    </SearchWrap>
  );
};

export default SearchItem;
