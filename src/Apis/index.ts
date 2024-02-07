// Import necessary modules
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { setLoading } from "../store/Redux-Dispatcher/Dispatcher";
import {
  setApiData,
  setUploadData,
} from "../store/Redux-Dispatcher/ApiDispatcher";

sessionStorage.setItem("userToken", uuidv4());
export const userToken = sessionStorage.getItem("userToken");
let accessToken: string | null = "";
export const registerFlow = async (apiBody: any) => {
  accessToken = sessionStorage.getItem("accessToken");
  setLoading(true);
  setApiData("");
  const url = `/coroassist/user/sendQuery`;

  return axios
    .post(url, apiBody, {
      headers: {
        // token: `${accessToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.data) {
        setApiData(response.data);
        setLoading(false);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
};

export const fileUpload = async (apiBody: any) => {
  const url = `/coroassist/user/fileUpload`;
  const token = sessionStorage.getItem("userToken");

  if (token !== null) {
    const body = new FormData();
    body.append("userToken", token);
    body.append("file", apiBody);
    body.append("source", "bot");
    return axios
      .post(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.training) {
          setUploadData(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return error;
      });
  } else {
    console.error("userToken is null");
    // handle the case when userToken is null, e.g., show an error message
    return null; // or handle accordingly based on your application's logic
  }
};

window.addEventListener("beforeunload", () => {
  sessionStorage.clear();
});
