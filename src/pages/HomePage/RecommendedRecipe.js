import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemModal from "./ItemModal";
const RecommendedRecipeItem = styled.div``;
const RecoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content : space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
const RecoImg = styled.div`
  width: 45%;
  border-radius: 5px;
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
const RecoText = styled.div`
  display : flex;
  flex-direction : column;
  width: 50%;
  color: #efefef;
  span{
    margin : 3px 0;
  }
`;
const Title = styled.h2`
  text-align : center;
  line-height : 1.5em;
  font-size : 25px;
`;
const RecipeName = styled.span`
  font-size : 18px;
  padding : 10px 0;
`;
const RecommendedRecipe = ({
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

  return (
    <RecommendedRecipeItem>
      <RecoWrap>
        <RecoImg>
          <img
            src={ATT_FILE_NO_MK}
            alt="음식 이미지"
            onClick={() => handleMenuClick()}
          />
        </RecoImg>
        <RecoText>
          <Title>오늘의 추천 레시피</Title>
          <RecipeName>{RCP_NM}</RecipeName>
          <span>{RCP_PARTS_DTLS}</span>
          <span>•조리방법 : {RCP_WAY2}</span>
          <span>•요리종류 : {RCP_PAT2}</span>
        </RecoText>
      </RecoWrap>
      {showMenu && (
        <ItemModal
          RCP_NM={RCP_NM}
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
