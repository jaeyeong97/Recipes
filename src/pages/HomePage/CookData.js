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
const CookData = ({ transcript, recipes, setRecordBtn, message, setMessage }) => {
  const [recommend, setRecommend] = useState(null); // 섞인 레시피의 첫번째 인덱스값에 있는 데이터

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
  }, []);

  if (!recommend) {
    return <p>잠시만 기다려주세요.</p>;
  }

  return (
    <CookDataWrap>
      {recommend && (
        <RecommendedRecipe key={recommend.RCP_SEQ} {...recommend} message={message} setMessage={setMessage} />
      )}
      <RecipeList>
        {/* 각 메뉴정보들을 ItemList으로 보냄*/}
        {recipes && recipes.map((it) => (
          <ItemList
            key={it.RCP_SEQ}
            {...it}
            transcript={transcript}
            setRecordBtn={setRecordBtn}
          />
        ))}
      </RecipeList>
    </CookDataWrap>
  );
};

export default CookData;
