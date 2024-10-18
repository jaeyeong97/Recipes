import { useEffect, useState } from "react";
import ItemModal from "./ItemModal";
import styled from "styled-components";

const ItemListWrap = styled.div`
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
  cursor: pointer;
  
  img {
    width: 100%;
    height: 250px;
    object-fit:cover;
  }
  &:hover img {
    filter: brightness(0.7);
  }

  @media (max-width: 500px) {
    img {
      height: 180px;
    }
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
`;
const ItemList = ({
  RCP_SEQ,
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

  const [showMenu, setShowMenu] = useState(false); // 메인 리스트 모달 표시

  // 헤더 검색아이콘 클릭
  const handleSearch = () => {
    setShowMenu(false);
    setShowSearch(true);
    window.scrollTo(0, 0);
  };

  // 헤더 로고 클릭
  const handleTitle = () => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  }

  // 헤더 즐겨찾기 클릭
  const handleFavorite = () => {
    setShowMenu(false);
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
    <ItemListWrap>
      <ItemBox>
        <ImgWrap>
          <img
            src={ATT_FILE_NO_MK}
            alt={RCP_NM}
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
          setShowMenu={setShowMenu}
          handleTitle={handleTitle}
          handleSearch={handleSearch}
          handleFavorite={handleFavorite}
          handleFavoriteFunction={handleFavoriteFunction}
          isFavorite={isFavorite}
        />
      )}
    </ItemListWrap>
  );
};

export default ItemList;
