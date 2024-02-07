import styled, { keyframes } from "styled-components";

const animation = keyframes`
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`;

const LoadingAnimation = styled.span`
  margin-left: 13px;
  width: 35px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #fc6736 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: ${animation} 1s infinite linear;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10%;
  align-items: flex-end;
  padding: 10px;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

export default function Loading() {
  return (
    <LoadingContainer className={"LoadingContainer"}>
      {/* <Logo className="Logo " src="a_logo.png" alt="icon" /> */}
      <LoadingAnimation className={"LoadingAnimation"}> </LoadingAnimation>
    </LoadingContainer>
  );
}
