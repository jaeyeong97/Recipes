import { useEffect, useState } from "react";
import ItemList from "../pages/ItemList";
import ItemModal from "./ItemModal";

const SearchItem = ({
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
        <div className="s">
            <img
                src={ATT_FILE_NO_MAIN}
                alt="음식 이미지"
                onClick={() => handleMenuClick()}
            />
            {RCP_NM}
            {showMenu && <ItemModal
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
        </div>
    );
};

export default SearchItem;