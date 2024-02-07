import styled, { keyframes } from "styled-components";

export const animation = keyframes`
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

export const LoadingAnimation = styled.span`
//   margin-left: 13px;
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #66347f 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: ${animation} 1s infinite linear;
`;

export const LoadingContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
padding-bottom: 40px;
  
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;



export const soundAnimation = keyframes`
  0% {
    opacity: 0.35;
    height: 3px;
  }
  100% {
    opacity: 1;
    height: 70px;
  }
`;

export const BarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  background: #0C2D57;
  bottom: 1px;
  height: 3px;
  width: 10px;
  margin: 0px 4px;
  border-radius: 5px;
  animation: ${soundAnimation} 0ms -600ms linear infinite alternate;

  &:nth-child(1) {
    left: 1px;
    animation-duration: 474ms;
  }
  &:nth-child(2) {
    left: 15px;
    animation-duration: 433ms;
  }
  &:nth-child(3) {
    left: 29px;
    animation-duration: 407ms;
  }
  &:nth-child(4) {
    left: 43px;
    animation-duration: 458ms;
  }
  &:nth-child(5) {
    left: 57px;
    animation-duration: 400ms;
  }
  &:nth-child(6) {
    left: 71px;
    animation-duration: 427ms;
  }
  &:nth-child(7) {
    left: 85px;
    animation-duration: 441ms;
  }
  &:nth-child(8) {
    left: 99px;
    animation-duration: 419ms;
  }
  &:nth-child(9) {
    left: 113px;
    animation-duration: 487ms;
  }
  &:nth-child(10) {
    left: 127px;
    animation-duration: 442ms;
  }
`;