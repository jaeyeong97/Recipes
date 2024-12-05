import styled from "styled-components";

const HeaderWrap = styled.header`
    width: 100%;
    padding: 30px 20px 25px 20px;
    user-select: none;
    background-color: #fff;
    border-bottom: 1px solid rgb(224, 224, 224);
    z-index: 11;
    .gnb {
        display: flex;
        justify-content: space-between;
        max-width: 1060px;
        margin: 0 auto;
        .logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo_img {
                width: 35px;
                height: 35px;
                margin-right: 10px;
                background-image: url(/assets/rf.png);
                background-size: 100% auto;
                background-repeat: no-repeat;
            }
            .header_title {
                font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
                font-size: 24px; 
                color: rgba(44, 108, 21, 0.5);
            }
        }
        .h_right {
            span {
                display: inline-block;
                font-size: 28px;
                color: rgba(44, 108, 21, 0.5);
                cursor: pointer;
                margin-left: 15px;
            }
        }
    }
`;
const Header = ({ handleSearch, handleTitle, handleFavorite }) => {

  return (
    <HeaderWrap>
      <nav className="gnb">
        <div className="logo" onClick={handleTitle}>
          <div className="logo_img"></div>
          <h2 className="header_title">Recipe Finder</h2>
        </div>
        <div className="h_right">
          <span className="material-symbols-outlined" onClick={handleSearch}>
            search
          </span>
          <span className="material-symbols-outlined" onClick={handleFavorite}>
            favorite
          </span>
        </div>
      </nav>
    </HeaderWrap>
  );
}

export default Header;