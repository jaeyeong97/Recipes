import { useEffect, useState } from "react";
import ItemModal from "./ItemModal";
import styled from "styled-components";

const ItemListWrap = styled.div`
`;
const ItemBox = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 4px rgba(0,0,0, 0.25);

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

`;
const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: 0.2s;
  }
  &:hover img {
    transform: scale(1.1);
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight : 600;
    line-height: 40px;
  }

`;
const ItemList = ({
  transcript,
  setRecordBtn,
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
  // 각 이미지 클릭시 모달 열리게 토글,
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // 음성명령 transcript가 레시피이름이랑 같을 경우 모달 열리게
  useEffect(() => {
    const scr = transcript.replace(/\s/g, ""); // 띄어쓰기 제거
    const rc = RCP_NM.replace(/\s/g, ""); // 레시피 이름에서 띄어쓰기 제거
    if (scr === rc) {
      setShowMenu(true);
      setRecordBtn(false);
    }
  }, [transcript, RCP_NM, setRecordBtn]);

  //모달 열릴 시 스크롤 설정
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <ItemListWrap>
      <ItemBox>
        <ImgWrap>
          <img
            src={ATT_FILE_NO_MAIN}
            alt="음식 이미지"
            onClick={() => handleMenuClick()}
          />
        </ImgWrap>
        <TxtWrap>{RCP_NM}</TxtWrap>
      </ItemBox>
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
    </ItemListWrap>
  );
};

export default ItemList;
