import { useEffect, useState } from "react";
import ItemModal from "../components/ItemModal";
import styled from "styled-components";

const ItemWrap = styled.div`
width : 100%;
`;
const ImgWrap = styled.div`
width: 200px;
img {
    width : 100%;
    height : auto;
}
`;

const Item = ({
    message,
    setMessage,
    transcript,
    RCP_SEQ,
    ATT_FILE_NO_MAIN,
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
    RCP_NA_TIP, }) => {

    // 각 이미지 클릭시 모달 열리게 토글,
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };
    // 음성명령 transcript가 레시피이름이랑 같을 경우 모달 열리게
    useEffect(() => {
        if (transcript === RCP_NM) {
            setShowMenu(true);
        }
    }, [transcript, RCP_NM]);

    useEffect(() => {
        if (message === "꺼 줘") {
            setShowMenu(false);
            setMessage(""); // 안하면 계속 message 보임
        };
    }, [message, setMessage]);

    //모달 열릴 시 스크롤 설정
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showMenu]);

    return (
        <ItemWrap>
            <ImgWrap>
                <img
                    src={ATT_FILE_NO_MAIN}
                    alt="음식 이미지"
                    onClick={() => handleMenuClick()}
                />
            </ImgWrap>
            {RCP_NM}
            {showMenu && <ItemModal
                RCP_SEQ={RCP_SEQ}
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
                setShowMenu={setShowMenu} />}
        </ItemWrap >
    );
};

export default Item;