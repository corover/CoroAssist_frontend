import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  CloseIcon,
  ContainerVoice,
  VoiceRecognitionContainer,
  VoiceRecognitionSpan,
} from "./Style";
import { playAudioURL } from "../utils/data";
import useSpeechRecognitionHook from "../Hooks/useSpeechRecognitionHook";
import { reducer } from "../store/Redux-selector/Selector";
import Upload from "../FlowCoro/UploadFile/Index";
import { setDefaultBtn } from "../store/Redux-Dispatcher/Dispatcher";

function UploadDrawer(props: any) {
  const { close, upload , resetUpload} = props;
  const { selectedLanguage } = useSelector(reducer);

  return (
    <ContainerVoice
      className={"ContainerVoice"}
      style={{ boxShadow: " #cacaca 0px 1px 2px 0px, #cacaca 0px 2px 6px 2px",  border: "1px solid rgb(200, 194, 188)"}}
    >
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
        <Upload upload={upload} resetUpload={resetUpload}/>
      </div>
    </ContainerVoice>
  );
}

export default UploadDrawer;
