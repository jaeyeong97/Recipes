import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";

const FavAni = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const ItemModalContainer = styled.div`
  position : relative;
  `;
const ItemModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: #fff;
  z-index: 10;
  `;
const InnerWidth = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 180px auto 0 auto;
    .img_wrap {
      width: 100%;
      img {
        width: 100%;
        height: auto;
        max-height: 600px;
        object-fit: cover;
      }
    }
    .title_wrap {
      display: flex;
      justify-content: space-between;
      margin: 50px 10px;
      @media (min-width: 768px) {
        margin: 50px 0;
      }
      .wrap {
        .title {
          font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
          margin-bottom: 15px;
          font-size: 25px;
          color: #000;
        }
        span {
          font-size: 14px;
          color: rgb(117, 117, 117);
        }
      }
      .bookmark {
        cursor: pointer;
        user-select: none;
        span {
          font-size: 30px;
        }
        .added {
          color: red;
          font-variation-settings: "FILL" 1;
          animation : ${FavAni} 0.4s;
        }
      }
      .alertFav { 
        position: fixed;
        bottom : 50px;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 10px;
        color: #fff;
        border-radius: 5px;
        border: 1px solid #fff;
        background-color: rgba(44, 108, 21, 0.8);
        z-index: 10;
      }
    }
    .comments {
      margin: 30px 10px;
      font-size: 12px;
      color: rgb(117, 117, 117);
      text-decoration: underline;
      @media (min-width: 768px) {
        margin: 30px 0;
      }
    }
    .tip_wrap {
      border-top: 1px solid rgb(224, 224, 224);
      padding: 30px 0;
      margin: 0 10px;
      @media (min-width: 768px) {
        margin: 0;
      }
      .tip_circle_wrap {
        display: flex;
        margin-bottom: 15px;
        .tip_circle {
          display: flex;
          width: 50px;
          height: 50px;
          min-width: 50px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          background-image: url(/assets/rf.png);
          background-size: 100% 100%;
        }
        .tip_title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 5px;
          span {
            font-size: 12px;
            font-weight: 600;
            color: #000;
          }
        }
      }
      .tip_txt {
        .tip {
          color: rgb(117, 117, 117);
        }
      }
    }
`;
const Nutrients = styled.section`
    margin: 50px 10px;
    @media (min-width: 768px) {
      margin: 50px 0;
    }
    .s_title {
      font-size : 18px;
      font-weight: 600;
      color: #000;
      padding-bottom: 5px;
      border-bottom: 2px solid rgba(44, 108, 21, 0.5);
    }
    .flex {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      span {
        font-size: 14px;
        color: rgb(117, 117, 117);
      }
      .bold {
        color: #000;
        font-weight: 600;
      }
    }
`;
const Ingredients = styled.section`
margin: 50px 10px;
@media (min-width: 768px) {
  margin: 50px 0;
}
.s_title {
  font-size : 18px;
  font-weight: 600;
  color: #000;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(44, 108, 21, 0.5);
}
span {
  display: block;
  margin: 5px 0;
  line-height: 1.8em;
  color: #000;
  font-weight: 600;
}
`;
const Recipe = styled.section`
  margin: 50px 0;
  .s_title {
    font-size : 18px;
    font-weight: 600;
    color: #000;
    padding-bottom: 5px;
    border-bottom: 2px solid rgba(44, 108, 21, 0.5);
    margin: 0 10px 20px 10px;
    @media (min-width: 768px) {
      margin: 0 0 20px 0;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    .img_wrap {
      @media (min-width: 768px) {
        width: 50%;
      }
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .txt_wrap {
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      @media (min-width: 768px) {
        width: calc(50% + 20px);
        padding-left: 20px;
        margin: 0;
      }
      .step {
        padding: 30px 0 10px 0;
        font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
        font-size: 20px;
        color: #000;
        border-bottom: 1px solid rgb(224, 224, 224);
        @media (min-width: 768px) {
          padding: 5px 0;
        }
      }
      span {
        padding: 15px 0;
        color: rgb(117, 117, 117);
      }
    }
  }
`;
const Close = styled.div`
  position: absolute;
  top: -45px;
  left: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .material-symbols-outlined {
    font-variation-settings: "wght" 300;
  }
  span {
    font-size: 26px;
    color: #000;
  }
  .back_txt {
    font-size: 16px;
  }
  @media screen and (min-width: 600px) {
    left: -5px;
  }
`;
const ItemModal = React.memo(({
  RCP_SEQ,
  RCP_NM,
  ATT_FILE_NO_MK,
  RCP_PAT2,
  RCP_WAY2,
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
  setShowMenu,
  handleSearch,
  handleFavorite,
  handleTitle,
  handleFavoriteFunction,
  isFavorite,
}) => {

  const handleClose = () => {
    setShowMenu(false);
  };

  const handleFavoriteClick = () => {
    handleFavoriteFunction({
      RCP_SEQ,
      RCP_NM,
      ATT_FILE_NO_MK,
      RCP_PAT2,
      RCP_WAY2,
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
      RCP_NA_TIP
    });
    // 즐겨찾기 알람 표시
    setFavAlert(true);

    // 3초 후에 즐겨찾기 알람 숨기기
    setTimeout(() => {
      setFavAlert(false);
    }, 3000);
  };

  const [favAlert, setFavAlert] = useState(false); // 즐겨찾기 모달 알람

  return (
    <ItemModalContainer>
      <ItemModalWrap>
        <Header handleTitle={handleTitle} handleSearch={handleSearch} handleFavorite={handleFavorite} />
        <InnerWidth>
          <div className="img_wrap">
            <img src={ATT_FILE_NO_MK} alt="음식 이미지" />
          </div>
          <div className="title_wrap">
            <div className="wrap">
              <h2 className="title">{RCP_NM}</h2>
              <span>#{RCP_PAT2}</span>
              <span>#{RCP_WAY2}</span>
            </div>
            <div className="bookmark" onClick={handleFavoriteClick}>
              <span className={`material-symbols-outlined ${isFavorite ? "added" : ""}`}>
                favorite
              </span>
            </div>
            {favAlert ? <div className="alertFav">
              {isFavorite ? "즐겨찾기에 추가되었어요." : "즐겨찾기가 해제되었어요."}
            </div> : ""}
          </div>
          <div className="comments">댓글보기</div>
          <div className="tip_wrap">
            <div className="tip_circle_wrap">
              <div className="tip_circle"></div>
              <div className="tip_title">
                <span>레시피 파인더</span>
                <span>저감 조리법 tip</span>
              </div>
            </div>
            <div className="tip_txt">
              {RCP_NA_TIP && <span className="tip">{RCP_NA_TIP}</span>}
            </div>
          </div>
          <Nutrients>
            <h3 className="s_title">영양성분</h3>
            <div className="flex">
              <span className="bold">열량</span>
              {INFO_ENG && <span>{INFO_ENG}kcal</span>}
            </div>
            <div className="flex">
              <span className="bold">탄수화물</span>
              {INFO_CAR && <span>{INFO_CAR}g</span>}
            </div>
            <div className="flex">
              <span className="bold">단백질</span>
              {INFO_PRO && <span>{INFO_PRO}g</span>}
            </div>
            <div className="flex">
              <span className="bold">지방</span>
              {INFO_FAT && <span>{INFO_FAT}g</span>}
            </div>
          </Nutrients>
          <Ingredients>
            <h3 className="s_title">재료</h3>
            {RCP_PARTS_DTLS && <span>재료정보: {RCP_PARTS_DTLS}</span>}
          </Ingredients>
          <Recipe>
            <h3 className="s_title">레시피</h3>
            {MANUAL01 && MANUAL_IMG01 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG01} alt="조리법01" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step1</span>
                  <span>{MANUAL01}</span>
                </div>
              </div>
            )}
            {MANUAL02 && MANUAL_IMG02 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG02} alt="조리법02" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step2</span>
                  <span>{MANUAL02}</span>
                </div>
              </div>
            )}
            {MANUAL03 && MANUAL_IMG03 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG03} alt="조리법03" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step3</span>
                  <span>{MANUAL03}</span>
                </div>
              </div>
            )}
            {MANUAL04 && MANUAL_IMG04 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG04} alt="조리법04" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step4</span>
                  <span>{MANUAL04}</span>
                </div>
              </div>
            )}
            {MANUAL05 && MANUAL_IMG05 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG05} alt="조리법05" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step5</span>
                  <span>{MANUAL05}</span>
                </div>
              </div>
            )}
            {MANUAL06 && MANUAL_IMG06 && (
              <div className="box">
                <div className="img_wrap">
                  <img src={MANUAL_IMG06} alt="조리법06" />
                </div>
                <div className="txt_wrap">
                  <span className="step">Step6</span>
                  <span>{MANUAL06}</span>
                </div>
              </div>
            )}
          </Recipe>
          <Close onClick={() => { handleClose() }}>
            <span className="material-symbols-outlined">
              arrow_back
            </span>
            <span className="back_txt">뒤로가기</span>
          </Close>
        </InnerWidth>
      </ItemModalWrap>
    </ItemModalContainer>
  );
});

export default ItemModal;
