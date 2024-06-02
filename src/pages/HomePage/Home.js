import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import styled, { keyframes } from "styled-components";
import Loading from "../LoadingPage/Loading";
import Header from "../../components/Header";
import SearchPage from "../SearchPage/SearchPage";
import Favorite from "../FavoritePage/Favorite";
import RecommendedRecipe from "./RecommendedRecipe";
import ItemList from "./ItemList";
import ItemModal from "./ItemModal";
import Pagination from "../../components/Pagination";
const speechAnimation = keyframes`
  0% {
    height: 0;
    padding: 0;
  }
  100% {
    height: 250px;
  }
`;
const micAnimation = keyframes`
  0% {
    opactiy: 0.7;
    width: 10px;
    height: 5px;
  }
  100% {
    opacity: 0.1;
    width: 55px;
    height: 35px;
  }
`;
const HomeWrap = styled.div`
  .home_wrap_in {
    max-width: 1100px;
    margin: 0 auto;
    .alert {
      position: fixed;
      top: 150px;
      left: 50%;
      width: 300px;
      padding: 15px 0;
      font-size: 16px;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      transform: translate(-50%, 0);
      background-color: rgba(44, 108, 21, 0.8);
      border: 1px solid #fff;
      z-index: 10;
    }
  }
`;

const CookDataWrap = styled.div`
margin-top: 150px;
.section_title_wrap{
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
}
`;
const ButtonWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 20px;

  .buttons_wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 700px;
    margin: 0 auto;
    border-top: 1px solid rgba(44, 108, 21, 0.5);
    border-left: 1px solid rgba(44, 108, 21, 0.5);

    button {
      width: 100%;
      height: 40px;
      border-right: 1px solid rgba(44, 108, 21, 0.5);
      border-bottom: 1px solid rgba(44, 108, 21, 0.5);
      color: #000;
      &:hover {
        background-color: rgba(44, 108, 21, 0.2);
      }
      &.active {
        color: #fff;
        background-color: rgba(44, 108, 21, 0.5);
      }
    }
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  @media screen and (min-width: 768px) {
    .buttons_wrap {
      grid-template-columns: repeat(7, 1fr);
    }
  }
`;
const SelectWrap = styled.div`
  position: relative;
  select {
    position: absolute;
    top: 15px;
    right: 20px;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 25px 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const RecordBtn = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  background-color: #D8D8D8;
  z-index: 9;
  .btn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .startBtn {
    span {
      font-size: 35px;
      color: #8A8A8A;
      font-variation-settings: "wght" 300;
    }
  }
  .stopBtn {
    span {
      font-size: 35px;
      color: #364AFF;
      font-variation-settings: "FILL" 1, "wght" 400;
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 55px;
      height: 35px;
      transform: translate(-50%, -50%);
      background-color: #364AFF;
      border-radius: 15px;
      z-index: -1;
      animation: ${micAnimation} 0.9s linear infinite;
    }
  }
  .textBox {
    position: absolute;
    top: -60px;
    left: -30px;
    width: 100px;
    padding: 5px;
    border: 1px solid #efefef;
    border-radius: 10px;
    font-size: 12px;
    background-color: #111;
    color: #fff;
  }
`;
const SpeechBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  color: #fff;
  padding: 40px;
  text-align: center;
  background-color: #111;
  animation: ${speechAnimation} 0.2s linear;

  .transcript {
    font-size: 18px;
    line-height: 3em;
  }
`;
const Home = () => {
  const [recipes, setRecipes] = useState(null); //레시피 데이터
  const [recordBtn, setRecordBtn] = useState(false); //녹음 버튼
  const [recordHelper, setRecordHelper] = useState(true); // 음성인식 사용 유도 메세지
  const [recipeAlert, setRecipeAlert] = useState(true); // 음성인식 레시피 모달 알람
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태
  const [sortOption, setSortOption] = useState(''); // 카테고리 옵션
  const itemsPerPage = 12; // 페이지당 항목 수
  const [modalRecipe, setModalRecipe] = useState(null); // 모달에 표시할 레시피
  const [showMenu, setShowMenu] = useState(false); // 음성인식 모달 표시
  const [showSearch, setShowSearch] = useState(false); // 헤더 검색 페이지
  const [favorite, setFavorite] = useState(false); // 헤더 즐겨찾기 
  const [favoriteArr, setFavoriteArr] = useState([]); // 즐겨찾기 배열

  // 레시피 API 호출
  useEffect(() => {
    const getData = async () => {
      const url = `https://openapi.foodsafetykorea.go.kr/api/d94323bfaec344a59d3d/COOKRCP01/json/100/800`;
      try {
        const res = await axios.get(url);
        const newRecipes = res.data.COOKRCP01.row; // 레시피 데이터
        setRecipes(newRecipes);
      } catch (error) {
        console.error("API 호출 오류:", error.message);
      }
    };
    getData();
  }, []);

  // 헤더 검색아이콘 클릭
  const handleSearch = () => {
    setShowMenu(false);
    setFavorite(false);
    setShowSearch(!showSearch);
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
    setFavorite(!favorite);
  };

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 꺼내쓰기
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    if (savedFavorites) {
      setFavoriteArr(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    // 즐겨찾기 로컬 스토리지에 저장
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteArr));
  }, [favoriteArr]);


  //즐겨찾기 추가/삭제 
  const handleFavoriteFunction = (recipe) => {
    setFavoriteArr((prev) => {
      if (prev.some(fav => fav.RCP_SEQ === recipe.RCP_SEQ)) {
        return prev.filter(fav => fav.RCP_SEQ !== recipe.RCP_SEQ);
      } else {
        return [...prev, recipe];
      }
    });
  };

  // 즐겨찾기 하트 스타일
  const isFavorite = modalRecipe && favoriteArr.some(fav => fav.RCP_SEQ === modalRecipe.RCP_SEQ);

  // 음성인식 사용유도 메세지
  useEffect(() => {
    const timer = setTimeout(() => {
      if (recipes) {
        setRecordHelper(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [recipes]);

  // 음성인식 레시피 모달 알람
  useEffect(() => {
    const timer = setTimeout(() => {
      if (modalRecipe) {
        setRecipeAlert(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
      setRecipeAlert(true);
    };
  }, [modalRecipe]);

  //음성인식 호출
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({});

  // 음성녹음 버튼 토글
  const handleRecord = () => {
    setRecordBtn(!recordBtn);
    if (!recordBtn) {
      SpeechRecognition.startListening({ language: "ko" });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  // 음성인식과 일치하는 레시피 메뉴 있을시
  useEffect(() => {
    if (transcript && recipes) {
      const scr = transcript.replace(/\s/g, ""); // 공백 제거
      const matchedRecipe = recipes.find(recipe => recipe.RCP_NM.replace(/\s/g, "") === scr);
      if (matchedRecipe) {
        setModalRecipe(matchedRecipe);
        setShowMenu(true);
        setRecordBtn(false);
      }
    }
  }, [transcript, recipes]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  useEffect(() => {
    if (favorite) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [favorite]);

  // 카테고리 변경
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 카테고리 변경시 첫페이지로
    setSortOption('');
  };

  // 선택된 카테고리에 따라 레시피 필터링
  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.RCP_PAT2 === selectedCategory)
    : [...(recipes || [])];

  // 옵션 변경
  const handleOptionChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  }

  // 옵션 변경
  if (sortOption) {
    filteredRecipes.sort((a, b) => {
      if (sortOption === '칼로리낮은순') {
        return parseFloat(a.INFO_ENG) - parseFloat(b.INFO_ENG);
      } else if (sortOption === '칼로리높은순') {
        return parseFloat(b.INFO_ENG) - parseFloat(a.INFO_ENG);
      } else if (sortOption === '탄수화물낮은순') {
        return parseFloat(a.INFO_CAR) - parseFloat(b.INFO_CAR);
      } else if (sortOption === '탄수화물높은순') {
        return parseFloat(b.INFO_CAR) - parseFloat(a.INFO_CAR);
      } else if (sortOption === '단백질낮은순') {
        return parseFloat(a.INFO_PRO) - parseFloat(b.INFO_PRO);
      } else if (sortOption === '단백질높은순') {
        return parseFloat(b.INFO_PRO) - parseFloat(a.INFO_PRO);
      } else if (sortOption === '지방낮은순') {
        return parseFloat(a.INFO_FAT) - parseFloat(b.INFO_FAT);
      } else if (sortOption === '지방높은순') {
        return parseFloat(b.INFO_FAT) - parseFloat(a.INFO_FAT);
      } else {
        return filteredRecipes;
      }
    });
  }
  // 현재 페이지에 따른 레시피 슬라이스
  const pageLastRecipe = currentPage * itemsPerPage;
  const pageFirstRecipe = pageLastRecipe - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(pageFirstRecipe, pageLastRecipe);

  // 페이지 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 추천레시피 4개
  const recommendedRecipes = [
    recipes ? recipes[474] : null,
    recipes ? recipes[106] : null,
    recipes ? recipes[109] : null,
    recipes ? recipes[480] : null
  ];

  // 음성녹음이 지원되지 않는 브라우져일 경우
  if (!browserSupportsSpeechRecognition) {
    return <p>음성인식이 지원되지 않는 브라우저입니다.</p>;
  }

  // 로딩페이지
  if (!recipes) {
    return <Loading />;
  }

  return (
    <HomeWrap>
      <Header
        handleSearch={handleSearch}
        handleTitle={handleTitle}
        handleFavorite={handleFavorite}
      />
      <div className="home_wrap_in">
        {showSearch ? <SearchPage
          recipes={recipes}
          setShowSearch={setShowSearch}
          setFavorite={setFavorite}
          handleFavoriteFunction={handleFavoriteFunction}
          favoriteArr={favoriteArr}
        /> : (
          <CookDataWrap>
            <RecommendedRecipe
              recommendedRecipes={recommendedRecipes}
              setShowSearch={setShowSearch}
              setFavorite={setFavorite}
              handleFavoriteFunction={handleFavoriteFunction}
              favoriteArr={favoriteArr}
            />
            <div className="section_title_wrap">
              <h2 className="section_title">FIND YOUR RECIPES</h2>
              <h3 className="s_title">원하는 레시피를 찾아 맛있는 요리를 만들어 보세요.</h3>
            </div>
            <ButtonWrap>
              <div className="buttons_wrap">
                <button className={selectedCategory === '' ? 'active' : ''} onClick={() => handleCategoryChange('')}>전체</button>
                <button className={selectedCategory === '반찬' ? 'active' : ''} onClick={() => handleCategoryChange('반찬')} >반찬</button>
                <button className={selectedCategory === '일품' ? 'active' : ''} onClick={() => handleCategoryChange('일품')}>일품</button>
                <button className={selectedCategory === '밥' ? 'active' : ''} onClick={() => handleCategoryChange('밥')}>밥</button>
                <button className={selectedCategory === '국&찌개' ? 'active' : ''} onClick={() => handleCategoryChange('국&찌개')}>국&찌개</button>
                <button className={selectedCategory === '후식' ? 'active' : ''} onClick={() => handleCategoryChange('후식')}>후식</button>
                <button className={selectedCategory === '기타' ? 'active' : ''} onClick={() => handleCategoryChange('기타')}>기타</button>
              </div>
            </ButtonWrap>
            <SelectWrap>
              <select value={sortOption} onChange={handleOptionChange}>
                <option value="">기본정렬</option>
                <option value="칼로리낮은순">칼로리 낮은순</option>
                <option value="칼로리높은순">칼로리 높은순</option>
                <option value="탄수화물낮은순">탄수화물 낮은순</option>
                <option value="탄수화물높은순">탄수화물 높은순</option>
                <option value="단백질낮은순">단백질 낮은순</option>
                <option value="단백질높은순">단백질 높은순</option>
                <option value="지방낮은순">지방 낮은순</option>
                <option value="지방높은순">지방 높은순</option>
              </select>
            </SelectWrap>
            <RecipeList>
              {currentRecipes.map((recipe) => (
                <ItemList
                  key={recipe.RCP_SEQ}
                  {...recipe}
                  setShowSearch={setShowSearch}
                  setFavorite={setFavorite}
                  handleFavoriteFunction={handleFavoriteFunction}
                  favoriteArr={favoriteArr}
                />
              ))}
            </RecipeList>
            <Pagination
              totalPages={Math.ceil(filteredRecipes.length / itemsPerPage)}
              currentPage={currentPage}
              paginate={paginate}
            />
          </CookDataWrap>
        )}
        <RecordBtn onClick={handleRecord}>
          {recordHelper && <span className="textBox">음성인식 기능을 사용해보세요! ▼</span>}
          <div className={recordBtn && listening ? "stopBtn btn" : "startBtn btn"}>
            <span className="material-symbols-outlined">mic</span>
          </div>
        </RecordBtn>
        {recordBtn && (
          <SpeechBox>
            <p>{listening ? "듣고있어요..." : "검색 결과가 없거나 마이크가 연결되어 있지 않습니다."}</p>
            <p style={{ marginTop: "20px" }}>{listening ? '찾고싶은 레시피 이름을 말해보세요!' : ""}</p>
            {listening && <p className="transcript">{transcript}</p>}
          </SpeechBox>
        )}
        {showMenu && modalRecipe && (
          <>
            <ItemModal
              {...modalRecipe}
              setShowMenu={setShowMenu}
              handleSearch={handleSearch}
              handleFavorite={handleFavorite}
              handleTitle={handleTitle}
              handleFavoriteFunction={handleFavoriteFunction}
              isFavorite={isFavorite}
            />
            {recipeAlert && (
              <div className="alert">
                {modalRecipe.RCP_NM} 레시피를 찾았어요.
              </div>
            )}
          </>
        )}
      </div>
      {favorite && (
        <Favorite
          setShowSearch={setShowSearch}
          setFavorite={setFavorite}
          handleFavoriteFunction={handleFavoriteFunction}
          favoriteArr={favoriteArr}
        />
      )}
    </HomeWrap>
  );
};

export default Home;