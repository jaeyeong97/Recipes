import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import CookData from "./CookData";
import styled, { keyframes } from "styled-components";
import SearchPage from "../SearchPage/SearchPage";
import Loading from "../LoadingPage/Loading";
import LoadingList from "../LoadingPage/LoadingList";

const speechAnimation = keyframes`
  0% {
    height: 0;
    padding : 0;
  }
  100% {
    height: 250px;
  }
`;

const HomeWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 1em;
  padding: 30px;
  color: #efefef;
`;
const RecordBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  z-index: 1;
  .btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .startBtn {
    background-image: url(./assets/microphone.png);
  }
  .stopBtn {
    background-image: url(./assets/mute.png);
  }
  .textBox{
    position : absolute;
    top : -60px;
    left : -30px;
    width : 100px;
    padding : 5px;
    border : 1px solid #efefef;
    border-radius : 10px;
    font-size : 12px;
    background-color: #111;
  }
`;
const SpeechBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  padding: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.95);
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  animation: ${speechAnimation} 0.2s linear;
`;

const Home = () => {
  const [recipes, setRecipes] = useState(null); //레시피 데이터
  const [changePage, setChangepage] = useState(false); //검색페이지
  const [recordBtn, setRecordBtn] = useState(false); //녹음 버튼
  const [search, setSearch] = useState(""); // 검색 데이터
  const [currentIndex, setCurrentIndex] = useState(51); // 현재 레시피 인덱스
  const [nextIndex, setNextIndex] = useState(74) // 다음 레시피 인덱스
  const [recordHelper, setRecordHelper] = useState(true); // 음성인식 사용 유도 메세지
  const [message, setMessage] = useState('');

  const commands = [
    {
      command: ['추천레시피 알려줘', '오늘의 추천레시피', '추천레시피', '오늘의 추천레시피 알려줘', '춘천', '추천', '레시피 추천해줘', '레시피 추천'],
      callback: () => setMessage('추천레시피 명령'),
      matchInterim: true, // 명령어 인식 즉시 콜백실행
      isFuzzyMatch: true, // 비슷한 음성도 감지해서 실행
      fuzzyMatchingThreshold: 0.2
    },
  ]
  //음성인식 사용유도 메세지
  useEffect(() => {
    const timer = (setTimeout(() => {
      if (recipes) {
        setRecordHelper(false)
      }
    }, 3000))
    return () => clearTimeout(timer);
  }, [recipes]);

  // 검색창 토글
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setChangepage(search === "" ? false : true);
  };

  // 뒤로가기 버튼
  const goPrev = () => {
    setChangepage(false);
    setSearch("");
  };


  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  // 전체레시피 api 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openapi.foodsafetykorea.go.kr/api/d94323bfaec344a59d3d/COOKRCP01/json/${currentIndex}/${nextIndex}/`
        );
        setRecipes((prevRecipes) => {
          if (prevRecipes === null) {
            return response.data.COOKRCP01.row;
          }
          return [...prevRecipes, ...response.data.COOKRCP01.row];
        });
      } catch (error) {
        console.error("api 호출 오류:", error.message);
      }
    };
    fetchData();
  }, [currentIndex, nextIndex]);
  const fetchMoreData = () => {
    setCurrentIndex((prevIndex) => prevIndex + 24);
    setNextIndex((prevNextIndex) => prevNextIndex + 24);
  };


  // 음성녹음 버튼 토글
  const handleRecord = () => {
    setRecordBtn(!recordBtn);
    if (!recordBtn) {
      SpeechRecognition.startListening({ language: "ko" });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  //message 명령 들어오면 음성인식 창 닫히게
  useEffect(() => {
    if (message) {
      setRecordBtn(false);
    };
  }, [message]);

  // 음성녹음이 지원되지 않는 브라우져일 경우
  if (!browserSupportsSpeechRecognition) {
    return <p>음성인식이 지원되지 않는 브라우저입니다.</p>;
  }

  //  로딩페이지
  if (!recipes) {
    return <Loading />;
  }

  return (
    <HomeWrap>
      <Title>레시피 파인더</Title>
      <SearchPage
        recipes={recipes}
        search={search}
        handleSearch={handleSearch}
        goPrev={goPrev}
      />
      {changePage ? null : (
        <InfiniteScroll
          dataLength={recipes.length}
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={1}
          loader={<LoadingList />}
        >
          <CookData
            transcript={transcript}
            recipes={recipes}
            setRecordBtn={setRecordBtn}
            message={message}
            setMessage={setMessage}
          />
        </InfiniteScroll>
      )}
      <RecordBtn
        onClick={() => {
          handleRecord();
        }}
      >
        {recordHelper && <span className="textBox">음성인식 기능을 사용해보세요! ▼</span>}

        {recordBtn ? (
          <div className="stopBtn btn"></div>
        ) : (
          <div className="startBtn btn">
          </div>
        )}
      </RecordBtn>
      {recordBtn ? (
        <SpeechBox>
          <p>{listening ? "듣고있어요..." : "검색 결과가 없거나 마이크가 연결되어 있지 않습니다."}</p>
          <p style={{ marginTop: "20px" }}>{listening ? '"레시피 추천해줘" 혹은 찾고싶은 레시피명을 말해보세요!' : ""}</p>
          {listening && <p>{transcript}</p>}
        </SpeechBox>
      ) : null}
    </HomeWrap>
  );
};

export default Home;
