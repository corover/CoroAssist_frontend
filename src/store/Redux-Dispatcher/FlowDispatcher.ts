import {
  language_view,
  greetings_view,
  chatbot_view,
  uploadFile_view,
} from "../Redux-actions/flowViewActions";
import store from "../Redux/Redux-Store";

export const setLanguage_view = (val: any) => {
  store.dispatch(language_view(val));
};

export const setGreetings_view = (val: any) => {
  store.dispatch(greetings_view(val));
};

export const setChatbot_view = (val: any) => {
  store.dispatch(chatbot_view(val));
};

export const setUploadFile_view = (val: any) => {
  store.dispatch(uploadFile_view(val));
};
