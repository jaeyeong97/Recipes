import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Response = () => {
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: "I would like to order *",
      callback: (food) => setMessage(`Your order is for: ${food}`),
    },
    {
      command: "The weather is :condition today",
      callback: (condition) => setMessage(`Today, the weather is ${condition}`),
    },
    {
      command: "Pass the salt (please)",
      callback: () => setMessage("My pleasure"),
    },
    {
      command: ["안녕", "안녕하세요"],
      callback: ({ command }) => setMessage(`반갑습니다 당신이 말한건 : "${command}"`),
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

  const handleStartClick = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ language: "ko" });
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="response">
        <p>음성인식이 지원되지 않는 브라우저입니다.</p>
      </div>
    );
  }

  return (
    <div className="response">
      <p>Microphone: {listening ? "듣고있는 중입니다." : "듣는중이 아닙니다."}</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{message}</p>
      <p>{transcript}</p>
    </div>
  );
};

export default Response;
