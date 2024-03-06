import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import RecommendedRecipe from "./RecommendedRecipe";

const CookDataWrap = styled.div``;
const RecipeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CookData = ({ message, setMessage, transcript, recipes, }) => {
  const [recommend, setRecommend] = useState(null);

  //레시피 섞기 함수
  const doShuffle = (recipes) => {
    for (let i = recipes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
    }
    return recipes;
  };

  // 섞은 레시피 첫번째 배열을 recommend에 저장
  useEffect(() => {
    if (recipes) {
      const randomRecipes = doShuffle([...recipes]);
      setRecommend(randomRecipes[0]);
    }
  }, [recipes]);

  if (!recommend) {
    return <p>Loading...</p>;
  }

  return (
    <CookDataWrap>
      {recommend && (
        <RecommendedRecipe key={recommend.RCP_SEQ} {...recommend} />
      )}
      <RecipeList>
        {/* 각 메뉴정보들을 ItemList으로 보냄*/}
        {recipes && recipes.map((it) => (
          <ItemList
            key={it.RCP_SEQ}
            {...it}
            message={message}
            setMessage={setMessage}
            transcript={transcript}
          />
        ))}
      </RecipeList>
    </CookDataWrap>
  );
};

export default CookData;
