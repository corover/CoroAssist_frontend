export const SELECTED_LANGUAGE = "SELECTED_LANGUAGE";

export const TRANSCRIPT_STATE = "TRANSCRIPT_STATE";

export const LOADING = "LOADING";

export const BACKGROUND_COLOR = "BACKGROUND_COLOR";

export const CHECK_MIC = "CHECK_MIC";

export const CHECK_FILEUPLOAD = "CHECK_FILEUPLOAD";

export const LANG_FLAG = "LANG_FLAG";

export const selectedLanguage = (value: any) => ({
  type: SELECTED_LANGUAGE,
  payload: value,
});

export const transcriptState = (value: any) => ({
  type: TRANSCRIPT_STATE,
  payload: value,
});

export const loading = (value: boolean) => ({
  type: LOADING,
  payload: value,
});

export const backgroundColor = (value: any) => ({
  type: BACKGROUND_COLOR,
  payload: value,
});

export const checkMic = (value: any) => ({
  type: CHECK_MIC,
  payload: value,
});

export const checkFileUpload = (value: any) => ({
  type: CHECK_FILEUPLOAD,
  payload: value,
});

export const langFlag = (value: any) => ({
  type: LANG_FLAG,
  payload: value,
});
