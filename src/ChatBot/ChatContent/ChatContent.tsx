import "./Style.css";
import { LogoImage, TopLogoHeader } from "../Body/Style";
import { useSelector } from "react-redux";
import {
  flowReducer,
  reducer,
  apiSelector,
} from "../../store/Redux-selector/Selector";

import Greetings from "../../FlowCoro/Greetings/Index";
import Language from "../../FlowCoro/LanguageView/Index";
import Messages from "../../FlowCoro/MessageView/Index";
import Upload from "../../FlowCoro/UploadFile/Index";
function ChatContent() {
  const { languageView, greetingView, chatbotView, uploadfileView } =
    useSelector(flowReducer);
  const { loading, bgColor } = useSelector(reducer);
  const { apiData, isBlocked, hasProfile, isNewUser } =
    useSelector(apiSelector);
    
  const renderComponent = () => {
    switch (true) {
      case languageView:
        return <Language />;
      case greetingView:
        return <Greetings />;
      case chatbotView:
        return <Messages />;
      case uploadfileView:
        return <Upload />;
      default:
        return <Greetings />;
    }
  };

  return (
    <div
      className="ContentChat"
      style={{
        background: `white`,
        // "linear-gradient(180deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ",
      }}
    >
      {!greetingView && (
        <TopLogoHeader className={"TopLogoHeader"}>
        <LogoImage className={"LogoImage"} src="logocoro.png" alt="header" />
      </TopLogoHeader>
      )}

      {renderComponent()}
    </div>
  );
}

export default ChatContent;
