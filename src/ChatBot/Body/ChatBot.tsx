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
              width="60px"
              style={{ marginBottom: "-2px", padding: "0px 7px 0px 0px", borderRight:"1px solid rgb(200, 194, 188)" }}
            />
          </FooterLink>
          <FooterLink
            className={"FooterLink"}
            href="https://corover.ai/bharatgpt/"
          >
            <img
              src="bharatGPT.png"
              alt="corover"
              width="80px"
              style={{ position: "absolute", bottom: "-8px"}}
            />
          </FooterLink>
        </span>
      </Footer>
    </Container>
  );
};

export default Chatbot;
