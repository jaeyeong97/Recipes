import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemModal from "./ItemModal";
const RecommendedRecipeItem = styled.div`
  margin-bottom : 30px;
`;
const RecoWrap = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 20px;
  max-width : 660px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  @media (min-width: 768px) {
    padding: 0 40px 40px 40px;
  }
`;
const Title = styled.h2`
  text-align: center;
  line-height: 1em;
  padding : 20px 0;
  font-size: 25px;
`;
const RecoInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: initial;
  }
`;
const RecoImg = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  max-width: 250px;
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

  @media (min-width: 768px) {
    width: 45%;
    max-width: initial;
  }
`;
const RecoText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    margin: 3px 0;
  }
  .dtls{
    margin : 5px 0 10px 20px;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const RecipeName = styled.span`
  font-size: 18px;
  padding: 10px 0;
`;
const RecommendedRecipe = ({
  message,
  setMessage,
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

  useEffect(() => {
    if (message === '추천레시피 명령') {
      setShowMenu(true);
      setMessage('');
    }
  }, [message, setMessage]);

  return (
    <RecommendedRecipeItem>
      <RecoWrap>
        <Title> 👩‍🍳추천 레시피👨‍🍳</Title>
        <RecoInner>
          <RecoImg>
            <img
              src={ATT_FILE_NO_MK}
              alt="음식 이미지"
              onClick={() => handleMenuClick()}
            />
          </RecoImg>
          <RecoText>
            <RecipeName>{RCP_NM}</RecipeName>
            <span>•기본재료</span>
            <span className="dtls">{RCP_PARTS_DTLS}</span>
            <span>•조리방법 : {RCP_WAY2}</span>
            <span>•요리종류 : {RCP_PAT2}</span>
          </RecoText>
        </RecoInner>
      </RecoWrap>
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
    </RecommendedRecipeItem>
  );
};

export default RecommendedRecipe;
