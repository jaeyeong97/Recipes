import React, { useEffect, useState } from "react";
import ItemList from "../pages/ItemList";
import styled from "styled-components";
import RecommendedRecipe from "./RecommendedRecipe";

const CookDataWrap = styled.div`
`;
const RecipeList = styled.div`
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
`;
const CookData = ({ message, setMessage, transcript, recipes, setRecipes }) => {

  const [recommend, setRecommend] = useState(null);



  //레시피 섞기 함수
  const doShuffle = (recipes) => {
    for (let i = recipes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
    }
    return recipes;
  }

  // 섞은 레시피 저장된 함수
  useEffect(() => {
    if (recipes) {
      const randomRecipes = doShuffle([...recipes]);
      setRecommend(randomRecipes[0]);
    }
  }, [recipes]);

  if (!recipes || !recommend) {
    return <p>Loading...레시피 함수가 안들어오나?</p>;
  }

  return (
    <CookDataWrap>
      {recommend && <RecommendedRecipe key={recommend.RCP_SEQ} {...recommend} />}
      <RecipeList >
        {/* 각 메뉴정보들을 ItemList으로 보냄*/}
        {recipes.filter((recipe) => (recipe.RCP_SEQ !== recommend.RCP_SEQ)).map((it) => (
          <ItemList key={it.RCP_SEQ} {...it} message={message} setMessage={setMessage} transcript={transcript} />
        ))}
      </RecipeList>
    </CookDataWrap>
  );
};

export default CookData;