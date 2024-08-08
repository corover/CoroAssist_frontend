import React, { useEffect, useState } from "react";
import { OptionHeader } from "../../ChatBot/ChatContent/Style";
import {
  reducer,
  apiSelector,
  flowReducer,
} from "../../store/Redux-selector/Selector";
import { useSelector } from "react-redux";
import {
  setCheckFileUpload,
  setSelectedLanguage,
} from "../../store/Redux-Dispatcher/Dispatcher";
import { CheckCircleSharp, DeleteOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import {
  setChatbot_view,
  setGreetings_view,
  setLanguage_view,
  setUploadFile_view,
} from "../../store/Redux-Dispatcher/FlowDispatcher";
import EastIcon from "@mui/icons-material/East";
import { fileUpload, registerFlow } from "../../Apis";
import { setBackgroundColor } from "../../store/Redux-Dispatcher/Dispatcher";
import { languageList } from "../../utils/data";
import { Text } from "../Greetings/Style";
import "./Styles.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Language from "../LanguageView/Index";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { setDefaultBtn } from "../../store/Redux-Dispatcher/Dispatcher";
import { Checkmark, SuccessAnimation, Circle, Check } from "../../UI/Style";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const translation = {
  en: {
    max: "Maximum file size 5 MB",
    maxErr: "The uploaded file size exceeds 5 MB",
    upload: "Upload PDF",
    uploadBtn: "Upload   ",
    uploadLoading: "Please wait a moment...",
    success: "Document uploaded successfully !",
  },
  hi: {
    max: "अधिकतम फ़ाइल आकार 5 MB",
    maxErr: "अपलोड की गई फ़ाइल का आकार 5 एमबी से अधिक है।",
    upload: "PDF अपलोड करें",
    uploadBtn: "अपलोड",
    uploadLoading: " कृपया प्रतीक्षा करें...",
    success: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया |",
  },
};

function Upload(props: any) {
  const { upload, resetUpload } = props;
  console.log(upload);
  const { selectedLanguage } = useSelector(reducer);
  const [load, setLoad] = useState(false);
  const [fileValid, setFileValid] = useState(false);

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    // if (file.size / 1048576 > 5) {
    //   setFileValid(true);
    // } else {
    setLoad(true);
    const uploadFile = await fileUpload(file);

    if (uploadFile !== undefined && uploadFile.training === true) {
      setCheckFileUpload(true);

      setUploadFile_view(false);
      setChatbot_view(true);
    }
    // }
  };

  useEffect(() => {
    const audio = new Audio("");

    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });

    const handleAudioEnded = () => {
      // isSpeechRecognitionSupported() ? startRecognition() : requestPermission();
    };

    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      if (!audio.paused) {
        audio.pause();
      }
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  return (
    <React.Fragment>
      {!load ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            textAlign: "center",
            height: "35vh",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "black",
              // padding: "50px 0px 20px 0px ",
            }}
          >
            {(translation as any)[selectedLanguage].upload}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "auto" }}
          >
            <div>
              <Button
                size="small"
                component="label"
                variant="text"
                onChange={handleFileUpload}
                startIcon={<CloudUploadIcon style={{ fontSize: "25px" }} />}
              >
                {(translation as any)[selectedLanguage].uploadBtn}
                <VisuallyHiddenInput
                  type="file"
                  accept=".pdf, .xls, .xlsx, .csv, .txt, .doc, .docx"
                />
              </Button>
            </div>

            {/* <div style={{ marginBottom: "20px" }}>
              {fileValid ? (
                <>
                  <span
                    style={{
                      padding: "10px",
                      fontStyle: "italic",
                      color: "#D83F31",
                    }}
                  >
                    {(translation as any)[selectedLanguage].maxErr}
                  </span>
                </>
              ) : (
                <span
                  style={{
                    padding: "10px",
                    fontStyle: "italic",
                    color: "#303841",
                  }}
                >
                  {(translation as any)[selectedLanguage].max}
                </span>
              )}
            </div> */}
          </div>
        </div>
      ) : (
        <span style={{     height: "35vh",}}>
          {upload ? (
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <span style={{ textAlign: "center", display: "block" }}>
                {(translation as any)[selectedLanguage].uploadLoading}
              </span>
              <img src="uploading.gif" alt="" width={200} />
            </span>
          ) : (
            <span>
              <span style={{ textAlign: "center", display: "block" }}>
                {(translation as any)[selectedLanguage].success}
              </span>

              <SuccessAnimation>
                <Checkmark
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <Circle cx="26" cy="26" r="25" fill="none" />
                  <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </Checkmark>
              </SuccessAnimation>
            </span>
          )}
        </span>
      )}
    </React.Fragment>
  );
}

export default Upload;
