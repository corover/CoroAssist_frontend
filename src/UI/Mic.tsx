import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  CloseIcon,
  ContainerVoice,
  VoiceRecognitionContainer,
  VoiceRecognitionSpan,
} from "../UI/Style";
import { playAudioURL } from "../utils/data";
import useSpeechRecognitionHook from "../Hooks/useSpeechRecognitionHook";
import { reducer } from "../store/Redux-selector/Selector";
import Upload from "../FlowCoro/UploadFile/Index";
import { setDefaultBtn } from "../store/Redux-Dispatcher/Dispatcher";

function Mic(props: any) {
  const { close, upload } = props;
  const { selectedLanguage } = useSelector(reducer);

  return (
    <ContainerVoice className={"ContainerVoice"} >
      <CloseIcon
        className={"CloseIcon"}
        src="close.png"
        width={15}
        height={15}
        alt="close"
        onClick={() => {
          close(false);
          setDefaultBtn(true);
        }}
      />

      <div style={{ height: "100%", flexGrow: 1 }}>
        <div
          style={{
            margin: "auto",
            textAlign: "justify",
            padding: "0px 15px 0px 15px",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "20px" }}></p>
        </div>
      </div>

      <div
        style={{
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <Upload />
      </div>
    </ContainerVoice>
  );
}

export default Mic;
