import "./Style.css";
import { useSelector } from "react-redux";
import {
  flowReducer,

} from "../../store/Redux-selector/Selector";

import Greetings from "../../FlowCoro/Greetings/Index";
import Messages from "../../FlowCoro/MessageView/Index";
import Upload from "../../FlowCoro/UploadFile/Index";
function ChatContent() {
  const {  greetingView, chatbotView, uploadfileView } =
    useSelector(flowReducer);
 
    
  const renderComponent = () => {
    switch (true) {

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
      }}
    >
   

      {renderComponent()}
    </div>
  );
}

export default ChatContent;
