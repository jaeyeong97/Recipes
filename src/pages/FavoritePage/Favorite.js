import styled from "styled-components";
import Header from "../../components/Header";
import ItemModal from "../HomePage/ItemModal";
import { useEffect, useState } from "react";

const FavoriteWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    z-index: 10;
    
    .Favorite_in {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 1100px;
        margin: 0 auto;
        gap: 20px;
        padding: 25px 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        @media (min-width: 768px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1024px) {
          grid-template-columns: repeat(4, 1fr);
        }
        .no_fav {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
    }
    .fav_title_wrap{
        font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0 30px 0;
      
        .fav_title {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          letter-spacing: 3px;
          margin-bottom: 15px;
          &:before {
            content: "|";
            font-weight: 400;
            font-size: 14px;
            margin: 0 10px;
          }
          &:after {
            content: "|";
            font-weight: 400;
            font-size: 14px;
            margin: 0 10px;
          }
        }
      
        .s_title {
          font-size: 14px;
          color: #222;
        }
`;
const ItemListWrap = styled.div`
width: 100%;
`;
const ItemBox = styled.div`
  width: 100%;
  padding: 30px 0;
`;
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  img {
    width: 100%;
    height: 250px;
    object-fit:cover;
  }
  &:hover img {
    filter: brightness(0.7);
  }
`;
const TxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span{
    font-size: 12px;
    text-align: center;
    color: #888;
  }
  .name{
    font-size : 14px;
    font-weight : 600;
    color: #111;
  }
`;
const Favorite = ({ setShowSearch, setFavorite, handleFavoriteFunction, favoriteArr }) => {

  const [showMenu, setShowMenu] = useState(false); // 메인 리스트 모달 표시
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // 헤더 검색아이콘 클릭
  const handleSearch = () => {
    setShowMenu(false);
    setFavorite(false);
    setShowSearch(true);
  };

  // 헤더 로고 클릭
  const handleTitle = () => {
    setShowSearch(false);
    setShowMenu(false);
    setFavorite(false);
  }

  // 헤더 즐겨찾기 클릭
  const handleFavorite = () => {
    setShowSearch(false);
    setShowMenu(false);
    setFavorite(true);
  };

  const handleMenuClick = (recipe) => {
    setSelectedRecipe(recipe)
    setShowMenu(true);
  };

  //모달 열릴 시 스크롤 설정
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    }
  }, [showMenu]);

  const isFavorite = selectedRecipe && favoriteArr.some(fav => fav.RCP_SEQ === selectedRecipe.RCP_SEQ);

  return (
    <FavoriteWrap>
      <Header handleTitle={handleTitle} handleSearch={handleSearch} handleFavorite={handleFavorite} />
      <div className="fav_title_wrap">
        <h2 className="fav_title">YOUR FAVORITE RECIPES</h2>
        <h3 className="s_title">즐겨찾기 한 레시피를 확인해보세요.</h3>
      </div>
      <div className="Favorite_in">
        {favoriteArr ? (
          favoriteArr.map(recipe => (
            <div key={recipe.RCP_SEQ}>
              <ItemListWrap>
                <ItemBox>
                  <ImgWrap>
                    <img
                      src={recipe.ATT_FILE_NO_MK}
                      alt={recipe.RCP_NM}
                      onClick={() => handleMenuClick(recipe)}
                    />
                  </ImgWrap>
                  <TxtWrap>
                    <span className="name">{recipe.RCP_NM}</span>
                    <span>#{recipe.RCP_WAY2} #{recipe.RCP_PAT2}</span>
                  </TxtWrap>
                </ItemBox>
                {showMenu && selectedRecipe && (
                  <ItemModal
                    {...selectedRecipe}
                    setShowMenu={setShowMenu}
                    handleTitle={handleTitle}
                    handleSearch={handleSearch}
                    handleFavorite={handleFavorite}
                    handleFavoriteFunction={handleFavoriteFunction}
                    isFavorite={isFavorite}
                  />
                )}
              </ItemListWrap>
            </div>
          ))
        ) : (
          <span className="no_fav">즐겨찾기한 레시피가 없습니다.</span>
        )}
      </div>
    </FavoriteWrap>
  )
}

export default Favorite;