import styled from "styled-components";

const LoadingWrap = styled.div`
    width: 100%;
    text-align : center;
    font-size : 18px;
    line-height : 40px;
    margin: 20px 0;
`;
const LoadingList = () => {

    return (
        <LoadingWrap>
            로딩중입니다...
        </LoadingWrap>
    );
};
export default LoadingList;