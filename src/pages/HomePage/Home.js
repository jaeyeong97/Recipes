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
  z-index: 1000;
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
  const [message, setMessage] = useState(""); //음성메시지 
  const [recipes, setRecipes] = useState(null); //레시피 데이터
  const [changePage, setChangepage] = useState(false); //검색페이지
  const [recordBtn, setRecordBtn] = useState(false); //녹음 버튼
  const [search, setSearch] = useState(""); // 검색 데이터
  const [currentIndex, setCurrentIndex] = useState(51); // 현재 레시피 인덱스
  const [nextIndex, setNextIndex] = useState(62) // 다음 레시피 인덱스

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

  const commands = [
    {
      command: "꺼 줘",
      callback: ({ command }) => setMessage(`${command}`),
    },
    {
      command: ["안녕", "안녕하세요"],
      callback: ({ command }) => setMessage(`${command}`),
      // matchInterim: true, // 다 말하기전에 일치하면 바로 콜백 호출
    },
    {
      command: "Beijing",
      callback: (command, spokenPhrase, similarityRatio) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true, // 비슷한 단어나 발음 고려하여 매칭
      fuzzyMatchingThreshold: 0.2, //20% 이상 유사도 가진 단어만 매칭
    },
    {
      command: ["eat", "sleep", "leave"],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true, // 가장 비슷한 단어를 골라 해당하는 것만 콜백 호출되게
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(), //clear라고 말할 시 음성인식 결과 초기화
    },
  ];

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
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
        console.error("전체 api 호출 오류:", error.message);
      }
    };
    fetchData();
  }, [currentIndex, nextIndex]);
  const fetchMoreData = () => {
    setCurrentIndex((prevIndex) => prevIndex + 12);
    setNextIndex((prevNextIndex) => prevNextIndex + 12);
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
          loader={<LoadingList />}
        >
          <CookData
            message={message}
            setMessage={setMessage}
            transcript={transcript}
            recipes={recipes}
            setRecipes={setRecipes}
          />
        </InfiniteScroll>
      )}
      <RecordBtn
        onClick={() => {
          handleRecord();
        }}
      >
        {recordBtn ? (
          <div className="stopBtn btn"></div>
        ) : (
          <div className="startBtn btn"></div>
        )}
      </RecordBtn>
      {recordBtn ? (
        <SpeechBox>
          <p>{listening ? "듣고있어요..." : "마이크 연결 상태를 확인해주세요."}</p>
          {listening && <p>{message}</p>}
          {listening && <p>{transcript}</p>}
        </SpeechBox>
      ) : null}
    </HomeWrap>
  );
};

export default Home;
