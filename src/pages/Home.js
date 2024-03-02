import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import CookData from "../components/CookData";
import styled from "styled-components";
import Search from "./Search";
import SearchPage from "./SearchPage";
import axios from "axios";

const RecordBox = styled.div`
  position : fixed;
  bottom : 20px;
  right : 20px;
  background-color : #fff;
  border : 1px solid #222;
  z-index : 1000;
`;
const Title = styled.h2`
    width : 100%;
    text-align : center;
    font-size : 28px;
    line-height : 1em;
    padding : 30px;
`;
const Home = () => {
    const [message, setMessage] = useState("");
    const [recipes, setRecipes] = useState(null);
    const [changeToSearch, setChangeToSearch] = useState(false);
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/d94323bfaec344a59d3d/COOKRCP01/json/1/5/`
                );
                setRecipes(response.data);
            } catch (error) {
                console.error("api 호출 오류:", error.message);
            }
        };
        fetchData();
    }, []);

    // 검색창 클릭시 검색창 페이지 오픈
    const handleChangePage = () => {
        setChangeToSearch(!changeToSearch);
    }
    const handleStartClick = () => {
        if (browserSupportsSpeechRecognition) {
            SpeechRecognition.startListening({ language: "ko" });
        }
    };
    const handleStopClick = () => {
        SpeechRecognition.stopListening();
    }

    if (!browserSupportsSpeechRecognition) {
        return (
            <div className="response">
                <p>음성인식이 지원되지 않는 브라우저입니다.</p>
            </div>
        );
    }
    return (
        <div className="response">
            {changeToSearch ? (
                <SearchPage recipes={recipes} />
            ) : (
                <>
                    <Title>레시피 파인더</Title>
                    <Search onclick={() => { handleChangePage() }} />
                    <CookData
                        message={message}
                        setMessage={setMessage}
                        transcript={transcript}
                        recipes={recipes}
                        setRecipes={setRecipes}
                    />
                    <RecordBox>
                        <p>{listening ? "듣고있어요..." : ""}</p>
                        <button onClick={handleStartClick}>Start</button>
                        <button onClick={handleStopClick}>Stop</button>
                        {listening && <p>{message}</p>}
                        {listening && <p>{transcript}</p>}
                    </RecordBox>
                </>
            )}
        </div>
    );
};

export default Home;
