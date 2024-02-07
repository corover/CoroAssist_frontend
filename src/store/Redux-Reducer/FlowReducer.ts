import {
  LANGUAGE_VIEW,
  GREETINGS,
  CHATBOT_VIEW,
  UPLOADFILE_VIEW,
} from "../Redux-actions/flowViewActions";

const initialState = {
  languageView: false,
  greetingView: true,
  chatbotView: false,
  uploadfileView: false,
};

// Reducer function
const flowReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LANGUAGE_VIEW:
      return { ...state, languageView: action.payload };
    case GREETINGS:
      return { ...state, greetingView: action.payload };
    case CHATBOT_VIEW:
      return { ...state, chatbotView: action.payload };
    case UPLOADFILE_VIEW:
      return { ...state, uploadfileView: action.payload };
    default:
      return state;
  }
};

export default flowReducer;
