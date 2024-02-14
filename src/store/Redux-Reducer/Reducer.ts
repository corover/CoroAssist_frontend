import {
  LOADING,
  SELECTED_LANGUAGE,
  TRANSCRIPT_STATE,
  BACKGROUND_COLOR,
  CHECK_MIC,
  CHECK_FILEUPLOAD,
  LANG_FLAG,
  DEFAULT_BTN,
} from "../Redux-actions/Actions";

const initialState = {
  selectedLanguage: "en",
  transcriptState: "",
  loading: false,
  bgColor:
    "linear-gradient(180deg, rgb(0, 74, 173) 0%, rgb(203, 108, 230) 100%) ",
  checkMic: false,
  checkFileUpload: false,
  langFlag: false,
  defaultBtn: true
};

const reducer_ = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };

    case TRANSCRIPT_STATE:
      return {
        ...state,
        transcriptState: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case BACKGROUND_COLOR:
      return {
        ...state,
        bgColor: action.payload,
      };

    case CHECK_MIC:
      return {
        ...state,
        checkMic: action.payload,
      };

    case CHECK_FILEUPLOAD:
      return {
        ...state,
        checkFileUpload: action.payload,
      };

    case LANG_FLAG:
      return {
        ...state,
        langFlag: action.payload,
      };


      case DEFAULT_BTN:
        return {
          ...state,
          defaultBtn: action.payload,
        };
  
    default:
      return state;
  }
};

export default reducer_;
