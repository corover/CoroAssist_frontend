import styled from "styled-components";

export const Container = styled.div`
  width: 424px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  // border-radius: 15px;
  position: sticky;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TopLogoHeader = styled.div`
   display: flex;
  //  flex-direction: row;
  justify-content: center;
  background-color: white;
  align-items: center;
  //  border-bottom: 1px solid silver;
  // padding-top: 10px;
  // padding-bottom: 10px;
  // height:10%
`;

export const LogoImage = styled.img`
align-content: center;
width: 200px;
height: 50px;
padding: 5px;
`;

export const Footer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-size:10px;
  // padding-top: 5px;
  // padding-bottom: 5px;
  // border-top: 1px solid silver;
  
`;

export const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  margin-left: 3px;
`;
