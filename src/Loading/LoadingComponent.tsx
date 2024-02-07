import React from "react";
import { CloseIcon, ContainerVoice, VoiceRecognitionContainer } from "../UI/Style";
import {
  LoadingContainer,
  Logo,
  LoadingAnimation,
  BarsContainer,
  Bar,
} from "./Style";
import { Loading } from "../translation";
import { useSelector } from "react-redux";
import { reducer } from "../store/Redux-selector/Selector";
import useSpeechRecognitionHook from "../Hooks/useSpeechRecognitionHook";

function VoiceAnimation() {


  const {
    transcript,
    startRecognition,
    stopRecognition,
   
  } = useSpeechRecognitionHook();
  const selectLanguage = useSelector(reducer).selectedLanguage;
  return (
    <ContainerVoice className={"ContainerVoice"}>
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <ContainerVoice className={"ContainerVoice"} style={{ bottom: "0px" }}>
        <CloseIcon
        className={"CloseIcon"}
        src="close.png"
        width={15}
        height={15}
        alt="close"
        onClick={()=>{stopRecognition()}}
      />
          <div style={{ height: "100%", flexGrow: 1, paddingBottom: "30px" }}>
            <div
              style={{
                margin: "auto",
                textAlign: "justify",
                padding: "0px 15px 0px 15px",
              }}
            ></div>
          </div>
          <div
            style={{
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <BarsContainer>
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
              <Bar />
            </BarsContainer>
          </div>
        </ContainerVoice>
      </div>
    </ContainerVoice>
  );
}

export default VoiceAnimation;
