// import React, { useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import CookData from "./CookData";
// import styled from "styled-components";

// const RecordBox = styled.div`
//   position : fixed;
//   bottom : 20px;
//   right : 20px;
//   background-color : #fff;
//   border : 1px solid #222;
//   z-index : 1000;
// `;
// const Response = () => {
//   const [message, setMessage] = useState("");

//   const commands = [
//     {
//       command: "꺼 줘",
//       callback: ({ command }) => setMessage(`${command}`),
//     },
//     {
//       command: ["안녕", "안녕하세요"],
//       callback: ({ command }) => setMessage(`${command}`),
//       // matchInterim: true, // 다 말하기전에 일치하면 바로 콜백 호출
//     },
//     {
//       command: "Beijing",
//       callback: (command, spokenPhrase, similarityRatio) =>
//         setMessage(
//           `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
//         ),
//       // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
//       isFuzzyMatch: true, // 비슷한 단어나 발음 고려하여 매칭
//       fuzzyMatchingThreshold: 0.2, //20% 이상 유사도 가진 단어만 매칭
//     },
//     {
//       command: ["eat", "sleep", "leave"],
//       callback: (command) => setMessage(`Best matching command: ${command}`),
//       isFuzzyMatch: true,
//       fuzzyMatchingThreshold: 0.2,
//       bestMatchOnly: true, // 가장 비슷한 단어를 골라 해당하는 것만 콜백 호출되게
//     },
//     {
//       command: "clear",
//       callback: ({ resetTranscript }) => resetTranscript(), //clear라고 말할 시 음성인식 결과 초기화
//     },
//   ];
//   const {
//     transcript,
//     listening,
//     browserSupportsSpeechRecognition,
//     resetTranscript,
//   } = useSpeechRecognition({ commands });

//   const handleStartClick = () => {
//     if (browserSupportsSpeechRecognition) {
//       SpeechRecognition.startListening({ language: "ko" });
//     }
//   };
//   const handleStopClick = () => {
//     SpeechRecognition.stopListening();
//   }

//   if (!browserSupportsSpeechRecognition) {
//     return (
//       <div className="response">
//         <p>음성인식이 지원되지 않는 브라우저입니다.</p>
//       </div>
//     );
//   }
//   return (
//     <div className="response">
//       <RecordBox>
//         <p>{listening ? "듣고있어요..." : ""}</p>
//         <button onClick={handleStartClick}>Start</button>
//         <button onClick={handleStopClick}>Stop</button>
//         {/* <button onClick={resetTranscript}>Reset</button> */}
//         {listening && <p>{message}</p>}
//         {listening && <p>{transcript}</p>}
//       </RecordBox>
//       <CookData message={message} setMessage={setMessage} transcript={transcript} />
//     </div>
//   );
// };

// export default Response;
