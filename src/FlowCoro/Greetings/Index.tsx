import React, { useEffect, useState } from "react";
import { OptionHeader } from "../../ChatBot/ChatContent/Style";
import { reducer, apiSelector } from "../../store/Redux-selector/Selector";
import { useSelector } from "react-redux";
import { setSelectedLanguage } from "../../store/Redux-Dispatcher/Dispatcher";
import { CheckCircleSharp, DeleteOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import {
  setGreetings_view,
  setLanguage_view,
} from "../../store/Redux-Dispatcher/FlowDispatcher";
import EastIcon from "@mui/icons-material/East";
import { registerFlow } from "../../Apis";
import { setBackgroundColor } from "../../store/Redux-Dispatcher/Dispatcher";
import { languageList } from "../../utils/data";
import { Text } from "./Style";
import Language from "../LanguageView/Index";
function Greetings() {
  const { selectedLanguage } = useSelector(reducer);

  const [lang, setLang] = useState("en");
  const nextContext = useSelector(apiSelector).nextContext;

  const handleSubmit = () => {
    setLanguage_view(true);
    setGreetings_view(false);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        height: "100vh",
      }}
    >
      <div style={{ marginTop: "30px"}}>
        <p
          style={{
            fontSize: "22px",
            color: "black",
          }}
        >
          Welcome to
        </p>

        <img
          src="logocoro.png"
          alt="coroAssist"
          width="180px"
          style={{ margin: "auto" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "50vh",
        }}
      >
        <IconButton
          style={{ backgroundColor: "rgb(252, 103, 54)" }}
          onClick={handleSubmit}
        >
          <EastIcon style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Greetings;
