import { apiData, uploadData } from "../Redux-actions/ApiActions";
import store from "../Redux/Redux-Store";

export const setApiData = (val: any) => {
  store.dispatch(apiData(val));
};

export const setUploadData = (val: any) => {
  store.dispatch(uploadData(val));
};
