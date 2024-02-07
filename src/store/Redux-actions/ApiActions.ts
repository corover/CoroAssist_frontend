export const API_DATA = "API_DATA";

export const UPLOAD_API = "UPLOAD_API";

export const apiData = (value: any) => ({
  type: API_DATA,
  payload: value,
});

export const uploadData = (value: any) => ({
  type: UPLOAD_API,
  payload: value,
});
