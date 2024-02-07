export const LANGUAGE_VIEW = "LANGUAGE_VIEW";
export const GREETINGS = "GREETINGS";
export const CHATBOT_VIEW = "CHATBOT_VIEW";
export const UPLOADFILE_VIEW = "UPLOADFILE_VIEW";

export const language_view = (value: any) => ({
  type: LANGUAGE_VIEW,
  payload: value,
});

export const greetings_view = (value: any) => ({
  type: GREETINGS,
  payload: value,
});

export const chatbot_view = (value: any) => ({
  type: CHATBOT_VIEW,
  payload: value,
});

export const uploadFile_view = (value: any) => ({
  type: UPLOADFILE_VIEW,
  payload: value,
});
