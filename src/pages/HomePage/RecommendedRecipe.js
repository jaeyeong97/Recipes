import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemModal from "./ItemModal";

const RecommendedRecipeWrap = styled.div`
  .section_title_wrap {
    font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0 30px 0;

    .section_title {
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
  }

  .recommended_recipes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    grid-template-areas:
      "img1 img1"
      "img2 img3"
      "img4 img4";
  }
  
  @media (min-width: 1024px) {
    .section_title_wrap {
      .section_title {
        font-size: 25px;
        margin-bottom: 25px;
      }
      .s_title {
        font-size: 17px;
      }
    }

    .recommended_recipes {
      grid-template-areas:
        "img1 img2 img3"
        "img1 img4 img4";
    }
  }
  
  @media (min-width: 1024px) {
    padding : 0 20px;
  }
`;

const Recipe = styled.div`
font-family: "BookkMyungjo-Bd", "Noto Sans KR", sans-serif;
  .wrap {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:nth-child(1) .wrap .img_txt,
  &:nth-child(4) .wrap .img_txt {
    position: absolute;
    bottom: 40px;
    left: 30px;
    span {
      font-size: 28px;
      font-weight: 600;
      color: #fff;
    }
  }
  &:nth-child(2) .wrap .img_txt,
  &:nth-child(3) .wrap .img_txt {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translate(0, -50%);
    span {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
    }
  }

  &:nth-child(1) .wrap img {
    max-height: 450px;
  }
  &:nth-child(2) .wrap img {
    height: 350px;
  }
  &:nth-child(3) .wrap img {
    height: 350px;
  }
  &:nth-child(4) .wrap img {
    max-height: 450px;
  }
  &:nth-child(1) {
    grid-area: img1;
  }
  &:nth-child(2) {
    grid-area: img2;
  }
  &:nth-child(3) {
    grid-area: img3;
  }
  &:nth-child(4) {
    grid-area: img4;
  }
  &:nth-child(1) .wrap,
  &:nth-child(4) .wrap {
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
    }
  }
  &:nth-child(2) .wrap:hover,
  &:nth-child(3) .wrap:hover {
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
  }
  &:nth-child(2) .wrap:hover .img_txt,
  &:nth-child(3) .wrap:hover .img_txt {
    display: block;
  }
  @media (min-width: 1024px) {
    &:nth-child(1) .wrap img {
      height: 621px;
      max-height: initial;
    }
    &:nth-child(2) .wrap img {
      height: 300px;
    }
    &:nth-child(3) .wrap img {
      height: 300px;
    }
    &:nth-child(4) .wrap img {
      height: 300px;
      max-height: initial;
      object-position: 100% 90%;
    }
  }
`;
const RecommendedRecipe = ({
  recommendedRecipes,
  setShowSearch,
  setFavorite,
  handleFavoriteFunction,
  favoriteArr,
}) => {

  const [showMenu, setShowMenu] = useState(false); // 추천레시피 모달 표시
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // 헤더 검색아이콘 클릭
  const handleSearch = () => {
    setShowMenu(false);
    setFavorite(false);
    setShowSearch(true);
    window.scrollTo(0, 0);
  };

  // 헤더 로고 클릭
  const handleTitle = () => {
    setShowSearch(false);
    setShowMenu(false);
    setFavorite(false);
    window.scrollTo(0, 0);
  }

  // 헤더 즐겨찾기 클릭
  const handleFavorite = () => {
    setShowSearch(false);
    setShowMenu(false);
    setFavorite(true);
    window.scrollTo(0, 0);
  };

  const handleMenuClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowMenu(true);
  };
  //모달 열릴 시 스크롤 설정
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const isFavorite = selectedRecipe && favoriteArr.some(fav => fav.RCP_SEQ === selectedRecipe.RCP_SEQ);

  return (
    <RecommendedRecipeWrap>
      <div className="section_title_wrap">
        <h2 className="section_title">RECIPES FOR YOU</h2>
        <h3 className="s_title">추천드리는 레시피를 둘러보세요.</h3>
      </div>
      <div className="recommended_recipes">
        {recommendedRecipes.map((recipe) => (
          <Recipe key={recipe.RCP_SEQ} onClick={() => handleMenuClick(recipe)}>
            <div className="wrap">
              <img src={recipe.ATT_FILE_NO_MK} alt={recipe.RCP_NM} />
              <div className="img_txt">
                <span>{recipe.RCP_NM}</span>
              </div>
            </div>
          </Recipe>
        ))}
      </div>
      {showMenu && selectedRecipe && (
        <ItemModal
          {...selectedRecipe}
          setShowMenu={setShowMenu}
          handleSearch={handleSearch}
          handleFavorite={handleFavorite}
          handleTitle={handleTitle}
          handleFavoriteFunction={handleFavoriteFunction}
          isFavorite={isFavorite}
        />
      )}
    </RecommendedRecipeWrap>
  );
};

export default RecommendedRecipe;
