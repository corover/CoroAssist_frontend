import React from "react";
import {
  CloseIcon,
  ContainerVoice,
  VoiceRecognitionContainer,
  VoiceRecognitionSpan,
} from "../UI/Style";
function ListeningMic() {
  return (
    <div
      style={{
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <VoiceRecognitionContainer className={"VoiceRecognitionContainer"}>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <img
          src="Mic.svg"
          alt="mic"
          style={{ zIndex: 999 }}
        />

        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
        <VoiceRecognitionSpan
          className={"VoiceRecognitionSpan"}
        ></VoiceRecognitionSpan>
      </VoiceRecognitionContainer>
    </div>
  );
}

export default ListeningMic;
