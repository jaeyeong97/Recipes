import styled from "styled-components";

const ItemModalContainer = styled.div`
  position : relative;
`;
const ItemModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  overflow-y: scroll;
  background-image: url(/assets/Modal-img.png);
  background-size: cover;
  z-index: 10;
  .title {
    padding: 20px 0;
    text-align: center;
    font-size: 22px;
    line-height: 1em;
  }
  .m_wrap {
    display: flex;
    justify-content : space-between;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);

    .img_wrap {
      width: 45%;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .txt_wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding : 10px 10px 0 0;
    }
  }
`;
const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-image: url(/assets/close.png);
  background-size: cover;
  cursor: pointer;
`;
const Orders = styled.div`
  max-width: 600px;
  margin : 0 auto;
  .s_title {
    margin: 70px 0 30px 0;
    font-size: 25px;
    text-align: center;
  }
  .box {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin : 20px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    img {
      width: 45%;
      height: auto;
      object-fit: cover;
      max-width : 250px;
      max-height : 200px;
      border-radius : 5px;
    }
    span {
      width: 50%;
      padding : 10px 10px 0 0;
    }
  }
  .tip{
    display : inline-block;
    width : 100%;
    padding: 10px;
    margin-bottom : 50px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }
`;
const ItemModal = ({
  RCP_NM,
  ATT_FILE_NO_MK,
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
  showMenu,
  setShowMenu,
}) => {
  const handleClose = () => {
    setShowMenu(!showMenu);
  };
  return (
    <ItemModalContainer>
      <ItemModalWrap>
        <span className="title">{RCP_NM}</span>
        <div className="m_wrap">
          <div className="img_wrap">
            <img src={ATT_FILE_NO_MK} alt="음식 이미지" />
          </div>
          <div className="txt_wrap">
            {RCP_PAT2 && <span>요리종류: {RCP_PAT2}</span>}
            {RCP_WAY2 && <span>조리방법: {RCP_WAY2}</span>}
            {INFO_WGT && <span>중량(1인분): {INFO_WGT} g</span>}
            {INFO_ENG && <span>열량: {INFO_ENG} kcal</span>}
            {INFO_CAR && <span>탄수화물: {INFO_CAR} g</span>}
            {INFO_PRO && <span>단백질: {INFO_PRO} g</span>}
            {INFO_FAT && <span>지방: {INFO_FAT} g</span>}
            {RCP_PARTS_DTLS && <span>재료정보: {RCP_PARTS_DTLS}</span>}
          </div>
        </div>
        <Orders>
          <div className="s_title">만드는 순서</div>
          {MANUAL01 && MANUAL_IMG01 && (
            <div className="box">
              <span>{MANUAL01}</span>
              <img src={MANUAL_IMG01} alt="조리법01" />
            </div>
          )}
          {MANUAL02 && MANUAL_IMG02 && (
            <div className="box">
              <span>{MANUAL02}</span>
              <img src={MANUAL_IMG02} alt="조리법02" />
            </div>
          )}
          {MANUAL03 && MANUAL_IMG03 && (
            <div className="box">
              <span>{MANUAL03}</span>
              <img src={MANUAL_IMG03} alt="조리법03" />
            </div>
          )}
          {MANUAL04 && MANUAL_IMG04 && (
            <div className="box">
              <span>{MANUAL04}</span>
              <img src={MANUAL_IMG04} alt="조리법04" />
            </div>
          )}
          {MANUAL05 && MANUAL_IMG05 && (
            <div className="box">
              <span>{MANUAL05}</span>
              <img src={MANUAL_IMG05} alt="조리법05" />
            </div>
          )}
          {MANUAL06 && MANUAL_IMG06 && (
            <div className="box">
              <span>{MANUAL06}</span>
              <img src={MANUAL_IMG06} alt="조리법06" />
            </div>
          )}
          {MANUAL07 && MANUAL_IMG07 && (
            <div className="box">
              <span>{MANUAL07}</span>
              <img src={MANUAL_IMG07} alt="조리법07" />
            </div>
          )}
          {MANUAL08 && MANUAL_IMG08 && (
            <div className="box">
              <span>{MANUAL08}</span>
              <img src={MANUAL_IMG08} alt="조리법08" />
            </div>
          )}
          {MANUAL09 && MANUAL_IMG09 && (
            <div className="box">
              <span>{MANUAL09}</span>
              <img src={MANUAL_IMG09} alt="조리법09" />
            </div>
          )}
          {MANUAL10 && MANUAL_IMG10 && (
            <div className="box">
              <span>{MANUAL10}</span>
              <img src={MANUAL_IMG10} alt="조리법10" />
            </div>
          )}
          {MANUAL11 && MANUAL_IMG11 && (
            <div className="box">
              <span>{MANUAL11}</span>
              <img src={MANUAL_IMG11} alt="조리법11" />
            </div>
          )}
          {MANUAL12 && MANUAL_IMG12 && (
            <div className="box">
              <span>{MANUAL12}</span>
              <img src={MANUAL_IMG12} alt="조리법12" />
            </div>
          )}
          {MANUAL13 && MANUAL_IMG13 && (
            <div className="box">
              <span>{MANUAL13}</span>
              <img src={MANUAL_IMG13} alt="조리법13" />
            </div>
          )}
          {MANUAL14 && MANUAL_IMG14 && (
            <div className="box">
              <span>{MANUAL14}</span>
              <img src={MANUAL_IMG14} alt="조리법14" />
            </div>
          )}
          {MANUAL15 && MANUAL_IMG15 && (
            <div className="box">
              <span>{MANUAL15}</span>
              <img src={MANUAL_IMG15} alt="조리법15" />
            </div>
          )}
          {MANUAL16 && MANUAL_IMG16 && (
            <div className="box">
              <span>{MANUAL16}</span>
              <img src={MANUAL_IMG16} alt="조리법16" />
            </div>
          )}
          {MANUAL17 && MANUAL_IMG17 && (
            <div className="box">
              <span>{MANUAL17}</span>
              <img src={MANUAL_IMG17} alt="조리법17" />
            </div>
          )}
          {MANUAL18 && MANUAL_IMG18 && (
            <div className="box">
              <span>{MANUAL18}</span>
              <img src={MANUAL_IMG18} alt="조리법18" />
            </div>
          )}
          {MANUAL19 && MANUAL_IMG19 && (
            <div className="box">
              <span>{MANUAL19}</span>
              <img src={MANUAL_IMG19} alt="조리법19" />
            </div>
          )}
          {MANUAL20 && MANUAL_IMG20 && (
            <div className="box">
              <span>{MANUAL20}</span>
              <img src={MANUAL_IMG20} alt="조리법20" />
            </div>
          )}
          {RCP_NA_TIP && <span className="tip">저감 조리법 TIP: {RCP_NA_TIP}</span>}
        </Orders>
        <Close
          onClick={() => {
            handleClose();
          }}
        ></Close>
      </ItemModalWrap>
    </ItemModalContainer>
  );
};

export default ItemModal;
