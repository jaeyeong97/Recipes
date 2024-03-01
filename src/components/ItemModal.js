import styled from "styled-components";

const ItemModalWrap = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    display : flex;
    flex-direction : column;
    width : 100%;
    height : 100vh;
    overflow: scroll;
    background-color : #fff;
`;
const Close = styled.div`
    position : absolute;
    top : 0;
    right : 0;
    width : 30px;
    height : 30px;
    background-color : #222;
`;
const ItemModal = ({
    RCP_NM, RCP_PAT2,
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
    }
    return (
        <div className="item_modal">
            <ItemModalWrap>
                <span>메뉴명: {RCP_NM}</span>
                {RCP_PAT2 && <span>요리종류: {RCP_PAT2}</span>}
                {RCP_WAY2 && <span>조리방법: {RCP_WAY2}</span>}
                {INFO_WGT && <span>중량(1인분): {INFO_WGT}</span>}
                {INFO_ENG && <span>열량: {INFO_ENG}</span>}
                {INFO_CAR && <span>탄수화물: {INFO_CAR}</span>}
                {INFO_PRO && <span>단백질: {INFO_PRO}</span>}
                {INFO_FAT && <span>지방: {INFO_FAT}</span>}
                {RCP_PARTS_DTLS && <span>재료정보: {RCP_PARTS_DTLS}</span>}
                {MANUAL01 && <span>만드는법01: {MANUAL01}</span>}
                {MANUAL_IMG01 && <span><img src={MANUAL_IMG01} alt="조리법01" /></span>}
                {MANUAL02 && <span>만드는법02: {MANUAL02}</span>}
                {MANUAL_IMG02 && <span><img src={MANUAL_IMG02} alt="조리법02" /></span>}
                {MANUAL03 && <span>만드는법03: {MANUAL03}</span>}
                {MANUAL_IMG03 && <span><img src={MANUAL_IMG03} alt="조리법03" /></span>}
                {MANUAL04 && <span>만드는법04: {MANUAL04}</span>}
                {MANUAL_IMG04 && <span><img src={MANUAL_IMG04} alt="조리법04" /></span>}
                {MANUAL05 && <span>만드는법05: {MANUAL05}</span>}
                {MANUAL_IMG05 && <span><img src={MANUAL_IMG05} alt="조리법05" /></span>}
                {MANUAL06 && <span>만드는법06: {MANUAL06}</span>}
                {MANUAL_IMG06 && <span><img src={MANUAL_IMG06} alt="조리법06" /></span>}
                {MANUAL07 && <span>만드는법07: {MANUAL07}</span>}
                {MANUAL_IMG07 && <span><img src={MANUAL_IMG07} alt="조리법07" /></span>}
                {MANUAL08 && <span>만드는법08: {MANUAL08}</span>}
                {MANUAL_IMG08 && <span><img src={MANUAL_IMG08} alt="조리법08" /></span>}
                {MANUAL09 && <span>만드는법09: {MANUAL09}</span>}
                {MANUAL_IMG09 && <span><img src={MANUAL_IMG09} alt="조리법09" /></span>}
                {MANUAL10 && <span>만드는법10: {MANUAL10}</span>}
                {MANUAL_IMG10 && <span><img src={MANUAL_IMG10} alt="조리법10" /></span>}
                {MANUAL11 && <span>만드는법11: {MANUAL11}</span>}
                {MANUAL_IMG11 && <span><img src={MANUAL_IMG11} alt="조리법11" /></span>}
                {MANUAL12 && <span>만드는법12: {MANUAL12}</span>}
                {MANUAL_IMG12 && <span><img src={MANUAL_IMG12} alt="조리법12" /></span>}
                {MANUAL13 && <span>만드는법13: {MANUAL13}</span>}
                {MANUAL_IMG13 && <span><img src={MANUAL_IMG13} alt="조리법13" /></span>}
                {MANUAL14 && <span>만드는법14: {MANUAL14}</span>}
                {MANUAL_IMG14 && <span><img src={MANUAL_IMG14} alt="조리법14" /></span>}
                {MANUAL15 && <span>만드는법15: {MANUAL15}</span>}
                {MANUAL_IMG15 && <span><img src={MANUAL_IMG15} alt="조리법15" /></span>}
                {MANUAL16 && <span>만드는법16: {MANUAL16}</span>}
                {MANUAL_IMG16 && <span><img src={MANUAL_IMG16} alt="조리법16" /></span>}
                {MANUAL17 && <span>만드는법17: {MANUAL17}</span>}
                {MANUAL_IMG17 && <span><img src={MANUAL_IMG17} alt="조리법17" /></span>}
                {MANUAL18 && <span>만드는법18: {MANUAL18}</span>}
                {MANUAL_IMG18 && <span><img src={MANUAL_IMG18} alt="조리법18" /></span>}
                {MANUAL19 && <span>만드는법19: {MANUAL19}</span>}
                {MANUAL_IMG19 && <span><img src={MANUAL_IMG19} alt="조리법19" /></span>}
                {MANUAL20 && <span>만드는법20: {MANUAL20}</span>}
                {MANUAL_IMG20 && <span><img src={MANUAL_IMG20} alt="조리법20" /></span>}
                {RCP_NA_TIP && <span>저감 조리법 TIP: {RCP_NA_TIP}</span>}
                <Close onClick={() => { handleClose() }}>닫기</Close>
            </ItemModalWrap>
        </div>
    );
};

export default ItemModal;