import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import CookData from "./CookData";
import styled from "styled-components";
import SearchPage from "../SearchPage/SearchPage";
import axios from "axios";
import Loading from "../LoadingPage/Loading";

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
const RecordBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
const Home = () => {
  const [message, setMessage] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [changePage, setChangepage] = useState(false);
  const [recordBtn, setRecordBtn] = useState(false);
  const [search, setSearch] = useState("");

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

  // 레시피 api 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openapi.foodsafetykorea.go.kr/api/d94323bfaec344a59d3d/COOKRCP01/json/1/500/`
        );
        setRecipes(response.data.COOKRCP01.row);
      } catch (error) {
        console.error("api 호출 오류:", error.message);
      }
    };
    fetchData();
  }, []);
  // 음성녹음 시작
  const handleStartClick = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ language: "ko" });
    }
  };
  // 음성녹음 정지
  const handleStopClick = () => {
    SpeechRecognition.stopListening();
  };
  // 음성녹음이 지원되지 않는 브라우져일 경우
  if (!browserSupportsSpeechRecognition) {
    return <p>음성인식이 지원되지 않는 브라우저입니다.</p>;
  }

  const handleRecord = () => {
    setRecordBtn(!recordBtn);
    if (!recordBtn) {
      SpeechRecognition.startListening({ language: "ko" });
    } else {
      SpeechRecognition.stopListening();
    }
  };

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
        <CookData
          message={message}
          setMessage={setMessage}
          transcript={transcript}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      )}
      <RecordBox
        onClick={() => {
          handleRecord();
        }}
      >
        {recordBtn ? (
          <div className="stopBtn btn"></div>
        ) : (
          <div className="startBtn btn"></div>
        )}
      </RecordBox>
      {/* <p>{listening ? "듣고있어요..." : ""}</p> */}
      {/* {listening && <p>{message}</p>} */}
      {/* {listening && <p>{transcript}</p>} */}
    </HomeWrap>
  );
};

export default Home;
