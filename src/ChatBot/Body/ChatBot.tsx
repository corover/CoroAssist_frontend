import { reducer } from "../../store/Redux-selector/Selector";
import ChatContent from "../ChatContent/ChatContent";
import { Container, Footer, FooterLink } from "./Style";
import { useSelector } from "react-redux";

const translation = {
  en: {
    policy: "Privacy Policy",
    terms: "Terms of use",
  },
  hi: {
    policy: "गोपनीयता नीति",
    terms: "प्रयोग की शर्तें",
  },
};

const Chatbot = () => {
  const { selectedLanguage } = useSelector(reducer);
  return (
    <Container className={"Container"}>
      <ChatContent />
      <Footer className={"Footer"}>
        <p> {(translation as any)[selectedLanguage].policy}</p>
        <span>
          <FooterLink className={"FooterLink"} href="https://corover.ai/">
            <img
              src="CoRover.png"
              alt="corover"
              width="170px"
              style={{ padding: "0px 0px 6px 0px" }}
            />
          </FooterLink>
        </span>
        <p> {(translation as any)[selectedLanguage].terms}</p>
      </Footer>
    </Container>
  );
};

export default Chatbot;
