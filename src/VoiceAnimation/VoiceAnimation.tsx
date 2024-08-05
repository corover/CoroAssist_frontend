import React from "react";
import {
  CloseIcon,
  ContainerVoice,
  VoiceRecognitionContainer,
} from "../UI/Style";

import { Loading } from "../translation";
import { useSelector } from "react-redux";
import { reducer } from "../store/Redux-selector/Selector";
import useSpeechRecognitionHook from "../Hooks/useSpeechRecognitionHook";
import "./style.css";
import { Mic, MusicNoteSharp } from "@mui/icons-material";
function VoiceAnimation() {
  const { transcript, startRecognition, stopRecognition } =
    useSpeechRecognitionHook();
  const selectLanguage = useSelector(reducer).selectedLanguage;

  return (
    <ContainerVoice
      className={"ContainerVoice"}
      style={{
        position: "absolute",
        bottom: "29px",
        maxHeight: "auto",
        overflow: "hidden",
        padding: "10px",
        boxSizing: "border-box",
        boxShadow: " #cacaca 0px 1px 2px 0px, #cacaca 0px 2px 6px 2px",  border: "1px solid rgb(200, 194, 188)"
      }}
    >
      <CloseIcon
        className={"CloseIcon"}
        src="close.png"
        width={15}
        height={15}
        alt="close"
        onClick={() => {
          stopRecognition();
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "15px 10px",
            wordWrap: "break-word",
            fontSize: "18px",
            color: "gray",
          }}
        >
          <i> {transcript.length > 0 ? transcript : "Try speaking..."}</i>
        </div>
        <main>
          <div className="circles">
            <Mic style={{ fontSize: "35px" }} />
          </div>
        </main>
      </div>
    </ContainerVoice>
  );
}

export default VoiceAnimation;
