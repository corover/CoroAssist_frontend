import React, { useEffect, useState } from "react";
import { reducer, apiSelector } from "../../store/Redux-selector/Selector";
import { useSelector } from "react-redux";

import { Button, IconButton } from "@mui/material";
import {
  setChatbot_view,
  setGreetings_view,
} from "../../store/Redux-Dispatcher/FlowDispatcher";
import EastIcon from "@mui/icons-material/East";

function Greetings() {



  const handleSubmit = () => {
    // setLanguage_view(true);
    setGreetings_view(false);
    setChatbot_view(true)
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
          width="300px"
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
          style={{ border:"1px solid black"}}
          onClick={handleSubmit}
        >
          <EastIcon style={{ color: "black" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Greetings;
