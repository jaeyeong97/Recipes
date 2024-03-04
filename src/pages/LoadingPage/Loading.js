import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    border-radius: 50% 40% 50% 55%;
    transform : translate(-50%, -50%) rotateY(0deg);
  }
  100% {
    border-radius: 35% 50% 45% 45%;
    transform : translate(-50%, -50%) rotateY(15deg);
  }
`;
const LoadingWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const LoadingTitle = styled.span`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #222;
`;
const LoadingTxt = styled.span`
  position: absolute;
  bottom: -50px;
  left: 10px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #222;
`;
const PanWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Pan = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid #444;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.5);
  background-color: #222;
`;
const Egg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50% 40% 45% 55%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  box-shadow: inset -3px -3px 2px rgba(0, 0, 0, 0.4);
  animation: ${loadingAnimation} 1s infinite alternate;
`;
const EggWhite = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f4cd00;
  transform: translate(-50%, -50%);
  box-shadow: inset -3px -3px 1px #d1b000;
`;
const EggYellow = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
`;
const Handle = styled.div`
  position: absolute;
  bottom: 50px;
  right: -117px;
  width: 130px;
  height: 25px;
  border: 2px solid #444;
  border-radius: 0 15px 15px 0;
  transform: rotate(19deg);
  background-color: #222;
  box-shadow: 19px 20px 5px rgba(0, 0, 0, 0.5);
`;

const Loading = () => {
  return (
    <LoadingWrap>
      <PanWrap>
        <Pan>
          <Egg>
            <EggWhite>
              <EggYellow></EggYellow>
            </EggWhite>
          </Egg>
        </Pan>
        <Handle></Handle>
        <LoadingTitle>레시피 파인더</LoadingTitle>
        <LoadingTxt>로딩중...</LoadingTxt>
      </PanWrap>
    </LoadingWrap>
  );
};

export default Loading;
