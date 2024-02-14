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
  },
  hi: {
    max: "अधिकतम फ़ाइल आकार 5 MB",
    maxErr: "अपलोड की गई फ़ाइल का आकार 5 एमबी से अधिक है।",
    upload: "PDF अपलोड करें",
    uploadBtn: "अपलोड",
    uploadLoading: " कृपया प्रतीक्षा करें...",
  },
};

function Upload() {
  const { selectedLanguage } = useSelector(reducer);
  const [load, setLoad] = useState(false);
  const [lang, setLang] = useState("en");
  const nextContext = useSelector(apiSelector).nextContext;
  const [fileValid, setFileValid] = useState(false);

  const { languageView, greetingView, chatbotView, uploadfileView } =
    useSelector(flowReducer);

  const handleSubmit = () => {
    setLanguage_view(true);
    setGreetings_view(false);
  };

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    if (file.size / 1048576 > 5) {
      setFileValid(true);
    } else {
      setLoad(true);
      const uploadFile = await fileUpload(file);

      if (uploadFile !== undefined && uploadFile.training === true) {
        setCheckFileUpload(true);
        setLoad(false);
        setUploadFile_view(false);
        setChatbot_view(true);
      }
    }
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
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          // paddingTop: "10vh",
        }}
      >
        {!load ? (
          <>
            <span
              style={{
                fontSize: "22px",
                color: "black",
                margin: "-12px 0px 20px 0px",
              }}
            >
              {(translation as any)[selectedLanguage].upload}
            </span>

            <img
              src="upload-icon-3.png"
              alt=""
              height="40px"
              width="70px"
              style={{ margin: "auto", paddingBottom: "20px" }}
            />

            <Button
              size="small"
              component="label"
              variant="contained"
              onChange={handleFileUpload}
              style={{
                margin: "auto",
                backgroundColor: "rgb(252, 103, 54)",
                color: "white",
                marginBottom: "20px",
              }}
            >
              {(translation as any)[selectedLanguage].uploadBtn}
              <VisuallyHiddenInput type="file" />
            </Button>

            <div style={{ marginBottom: "20px" }}>
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
                  {/* <br />
                  <span
                    style={{
                      padding: "10px",
                      fontStyle: "italic",
                      color: "#D83F31",
                    }}
                  >
                    Please upload less than 5 MB
                  </span> */}
                </>
              ) : (
                <span
                  style={{
                    padding: "10px",
                    fontStyle: "italic",
                    color: "#436850",
                  }}
                >
                  {(translation as any)[selectedLanguage].max}
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            <p> {(translation as any)[selectedLanguage].uploadLoading}</p>
            <div className="loadingArea">
              <div className="loader"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Upload;
