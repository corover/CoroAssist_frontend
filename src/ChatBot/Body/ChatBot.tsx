import ChatContent from "../ChatContent/ChatContent";
import { Container, Footer, FooterLink } from "./Style";

const Chatbot = () => {
  return (
    <Container className={"Container"}>
      <ChatContent />
      <Footer className={"Footer"}>
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
      </Footer>
    </Container>
  );
};

export default Chatbot;
