import store from "../Redux/Redux-Store";
import {
  selectedLanguage,
  transcriptState,
  loading,
  backgroundColor,
  checkMic,
  checkFileUpload,
  langFlag
} from "../Redux-actions/Actions";

export const setSelectedLanguage = (val: any) => {
  store.dispatch(selectedLanguage(val));
};

export const setTranscriptState = (val: any) => {
  store.dispatch(transcriptState(val));
};

export const setLoading = (val: boolean) => {
  store.dispatch(loading(val));
};

export const setBackgroundColor = (val: any) => {
  store.dispatch(backgroundColor(val));
};

export const setCheckMic = (val: any) => {
  store.dispatch(checkMic(val));
};

export const setCheckFileUpload = (val: any) => {
  store.dispatch(checkFileUpload(val));
};


export const setLangFlag= (val:any)=>{
  store.dispatch(langFlag(val))
}