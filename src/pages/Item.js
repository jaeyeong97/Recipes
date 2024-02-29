import { useState } from "react";
import ItemModal from "../components/ItemModal";

const Item = ({ ATT_FILE_NO_MAIN, RCP_NM }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="item">
            <div className="food_wrap">
                <img
                    src={ATT_FILE_NO_MAIN}
                    alt="음식 이미지"
                    onClick={() => { setShowMenu(!showMenu) }}
                />
                {showMenu && <ItemModal RCP_NM={RCP_NM} />}
            </div>
        </div>
    );
};

export default Item;