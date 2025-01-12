# 음성인식 레시피 웹사이트

React를 사용하여 구현된 레시피 웹사이트로, 사용자가 음성으로 레시피를 검색할 수 있도록 만든 웹사이트입니다.

## 프로젝트 기능

- **음성인식 검색**: 사용자가 음성인식 기능을 활용해 레시피를 검색을 할 수 있게 구현하였습니다.
- **레시피 데이터 비동기 처리**: 레시피 데이터를 공공데이터 레시피 API에서 비동기적으로 가져와 웹사이트에 표시했습니다.
- **캐시 및 데이터 관리**: 데이터를 효율적으로 가져오고, staleTime과 cacheTime 설정을 통해 필요한 데이터만 새로 로드하여 성능을 최적화했습니다.

## 사용 기술

- **React**: 재사용성과 유지보수를 고려하여 컴포넌트 기반으로 UI를 설계하였습니다.
  
- **Styled-Components**: 각 컴포넌트별로 독립적인 스타일을 적용하여 코드 가독성과 유지보수를 용이하게 하였습니다.
  
- **Axios**: 레시피 API 데이터를 비동기적으로 가져와 화면에 표시하고, 빠른 데이터 처리를 구현했습니다.
  
- **React Query**: `useQuery` 훅을 사용해 레시피 데이터를 효율적으로 가져오고, staleTime과 cacheTime을 활용해 캐시 관리를 최적화했습니다.
  
- **react-speech-recognition**: 음성인식 라이브러리를 통해 사용자가 음성으로 레시피를 검색할 수 있는 기능을 구현했습니다.

## 프로젝트 주소

jaeyeong97-speechnrecord.web.app/
