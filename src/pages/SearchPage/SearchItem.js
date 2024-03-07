import { useEffect, useState } from "react";
import ItemModal from "../HomePage/ItemModal";
import styled from "styled-components";

const SearchWrap = styled.div`
  padding-bottom : 1px;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  .img_wrap {
    width: 40%;
    max-width: 200px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  .txt_wrap {
    display: flex;
    flex-direction: column;
    width: 55%;
    .gradients {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media (min-width: 768px) {
        -webkit-line-clamp: initial;
      }
    }
  }
`;
const SearchItem = ({
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
  HASH_TAG,
  RCP_PARTS_DTLS,
  MANUAL01,
  MANUAL02,
  MANUAL03,
  MANUAL04,
  MANUAL05,
  MANUAL06,
  MANUAL07,
  MANUAL08,
  MANUAL09,
  MANUAL10,
  MANUAL11,
  MANUAL12,
  MANUAL13,
  MANUAL14,
  MANUAL15,
  MANUAL16,
  MANUAL17,
  MANUAL18,
  MANUAL19,
  MANUAL20,
  MANUAL_IMG01,
  MANUAL_IMG02,
  MANUAL_IMG03,
  MANUAL_IMG04,
  MANUAL_IMG05,
  MANUAL_IMG06,
  MANUAL_IMG07,
  MANUAL_IMG08,
  MANUAL_IMG09,
  MANUAL_IMG10,
  MANUAL_IMG11,
  MANUAL_IMG12,
  MANUAL_IMG13,
  MANUAL_IMG14,
  MANUAL_IMG15,
  MANUAL_IMG16,
  MANUAL_IMG17,
  MANUAL_IMG18,
  MANUAL_IMG19,
  MANUAL_IMG20,
  RCP_NA_TIP,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  //모달 열릴 시 스크롤 설정
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <SearchWrap onClick={() => handleMenuClick()}>
      <SearchBox>
        <div className="img_wrap">
          <img src={ATT_FILE_NO_MAIN} alt="음식 이미지" />
        </div>
        <div className="txt_wrap">
          <span>{RCP_NM}</span>
          <span>{RCP_WAY2}</span>
          <span>{RCP_PAT2}</span>
          <span>{HASH_TAG}</span>
          <span className="gradients">{RCP_PARTS_DTLS}</span>
        </div>
      </SearchBox>
      {showMenu && (
        <ItemModal
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
          MANUAL07={MANUAL07}
          MANUAL08={MANUAL08}
          MANUAL09={MANUAL09}
          MANUAL10={MANUAL10}
          MANUAL11={MANUAL11}
          MANUAL12={MANUAL12}
          MANUAL13={MANUAL13}
          MANUAL14={MANUAL14}
          MANUAL15={MANUAL15}
          MANUAL16={MANUAL16}
          MANUAL17={MANUAL17}
          MANUAL18={MANUAL18}
          MANUAL19={MANUAL19}
          MANUAL20={MANUAL20}
          MANUAL_IMG01={MANUAL_IMG01}
          MANUAL_IMG02={MANUAL_IMG02}
          MANUAL_IMG03={MANUAL_IMG03}
          MANUAL_IMG04={MANUAL_IMG04}
          MANUAL_IMG05={MANUAL_IMG05}
          MANUAL_IMG06={MANUAL_IMG06}
          MANUAL_IMG07={MANUAL_IMG07}
          MANUAL_IMG08={MANUAL_IMG08}
          MANUAL_IMG09={MANUAL_IMG09}
          MANUAL_IMG10={MANUAL_IMG10}
          MANUAL_IMG11={MANUAL_IMG11}
          MANUAL_IMG12={MANUAL_IMG12}
          MANUAL_IMG13={MANUAL_IMG13}
          MANUAL_IMG14={MANUAL_IMG14}
          MANUAL_IMG15={MANUAL_IMG15}
          MANUAL_IMG16={MANUAL_IMG16}
          MANUAL_IMG17={MANUAL_IMG17}
          MANUAL_IMG18={MANUAL_IMG18}
          MANUAL_IMG19={MANUAL_IMG19}
          MANUAL_IMG20={MANUAL_IMG20}
          RCP_NA_TIP={RCP_NA_TIP}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </SearchWrap>
  );
};

export default SearchItem;
