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
    success: "Document uploaded successfully !"
  },
  hi: {
    max: "अधिकतम फ़ाइल आकार 5 MB",
    maxErr: "अपलोड की गई फ़ाइल का आकार 5 एमबी से अधिक है।",
    upload: "PDF अपलोड करें",
    uploadBtn: "अपलोड",
    uploadLoading: " कृपया प्रतीक्षा करें...",
    success: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया |"
  },
};

function Upload(props: any) {
  const { upload , resetUpload} = props;
  console.log(upload);
  const { selectedLanguage } = useSelector(reducer);
  const [load, setLoad] = useState(false);
  const [fileValid, setFileValid] = useState(false);

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    // resetUpload()
    if (file.size / 1048576 > 5) {
      setFileValid(true);
    } else {
      setLoad(true);
      const uploadFile = await fileUpload(file);

      if (uploadFile !== undefined && uploadFile.training === true) {
        setCheckFileUpload(true);
   
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
    <React.Fragment>
      {!load ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            textAlign: "center",
            height: "25vh",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              color: "black",
              padding: "50px 0px 20px 0px ",
            }}
          >
            {(translation as any)[selectedLanguage].upload}
          </span>
          <Button
            size="small"
            component="label"
            variant="text"
            onChange={handleFileUpload}
            startIcon={<CloudUploadIcon style={{ fontSize: "25px" }} />}
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
        </div>
      ) : (
        <div>
          {upload ? (
            <span style={{ display: "flex", justifyContent: "center", flexDirection:"column"}}>
              <p>{(translation as any)[selectedLanguage].uploadLoading}</p>
              <img src="uploading.gif" alt="" width={200} />
            </span>
          ) : (
            <span style={{ display: "flex", justifyContent: "center" ,  flexDirection:"column"}}>
              <p>{(translation as any)[selectedLanguage].success}</p>
              <img src="succes.gif" alt="" width={200} />
            </span>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default Upload;
