import { API_DATA, UPLOAD_API } from "../Redux-actions/ApiActions";

const initialState = {
  apiData: undefined,
  uploadData: undefined,
};

const apiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };

    case UPLOAD_API:
      return {
        ...state,
        uploadData: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;
