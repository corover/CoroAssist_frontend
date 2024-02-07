import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import moment from "moment";
import "./Styles.css";
import useSpeechRecognitionHook from "../../Hooks/useSpeechRecognitionHook";
import {
  setChatbot_view,
  setLanguage_view,
} from "../../store/Redux-Dispatcher/FlowDispatcher";
import {
  reducer,
  apiSelector,
  flowReducer,
} from "../../store/Redux-selector/Selector";
import { useSelector } from "react-redux";
import { fileUpload, registerFlow } from "../../Apis";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { languageList } from "../../utils/data";
import {
  setCheckFileUpload,
  setCheckMic,
  setLangFlag,
  setLoading,
  setSelectedLanguage,
} from "../../store/Redux-Dispatcher/Dispatcher";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loading from "./Loading";
import VoiceAnimation from "../../Loading/LoadingComponent";
import { setApiData } from "../../store/Redux-Dispatcher/ApiDispatcher";
import Language from "../LanguageView/Index";
import { ContainerVoice } from "../../UI/Style";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { LogoImage, TopLogoHeader } from "../../ChatBot/Body/Style";
import {
  startOver,
  askAgain,
  placeholder,
  chatText,
  audio,
} from "../../translation";
import Mic from "../../UI/Mic";
function Messages() {
  const { languageView, greetingView, chatbotView, uploadfileView } =
    useSelector(flowReducer);

  const { selectedLanguage, loading, checkMic, langFlag, checkFileUpload } =
    useSelector(reducer);

  const options = [
    {
      val: (chatText as any)[selectedLanguage].button1,
      id: 1,
    },
    {
      val: (chatText as any)[selectedLanguage].button2,
      id: 2,
    },
  ];

  const chatMessageRef = React.useRef<HTMLDivElement | null>(null);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElementRef = React.useRef<HTMLAudioElement>(null);
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState<any>("");
  const [micBtn, setMicBtn] = useState(true);
  const [sendBtn, setSendBtn] = useState(false);
  const { apiData, uploadData } = useSelector(apiSelector);
  const [upload, setUpload] = useState(false);
  const [translate, setTranslate] = useState(true);
  const [defaultBtn, setDefaultBtn] = useState(true);

  const {
    transcript,
    startRecognition,
    stopRecognition,
    isSpeechRecognitionSupported,
    requestPermission,
    listening,
    resetTranscript,
  } = useSpeechRecognitionHook();

  const getLangCode = (languageName: any) => {
    const lang = languageList.find((lang) => lang.id === languageName);

    if (lang) {
      return {
        letter: lang.firstLetter,
        color: lang.color,
      };
    }
  };

  const playAudio = (audioUrl: string) => {
    if (!audioUrl) return;

    const audioElement: HTMLAudioElement | null = audioElementRef.current!;

    if (audioElement) {
      audioElement.src = audioUrl;
      audioElement.load();

      audioElement.addEventListener("canplaythrough", () => {
        audioElement.play();
        setCurrentAudioUrl(audioUrl);
        setIsPlaying(true);
      });

      audioElement.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
  };

  // Pause audio
  const pauseAudio = () => {
    const audioElement: any = audioElementRef.current;
    audioElement.pause();
    setIsPlaying(false);
  };

  const handleTanslate = () => {
    setDefaultBtn(true);
    setTranslate(true);
    setMessages((prevMessages: any) => [
      ...prevMessages,
      {
        text: (chatText as any)[selectedLanguage].translateTxt,
        sender: "bot",
        time: moment().format("h:mm A"),
        audio: "",
      },
    ]);
  };
  const handleBack = () => {
    setLangFlag(true);
    setCheckFileUpload(true);
  };

  const handleUpload = () => {
    setTranslate(false);
    setUpload(true);
    setDefaultBtn(false);
  };
  const handleSendMessage = async () => {
    setCheckMic(false);

    setMessages((prevChats: any) => [
      ...prevChats,
      {
        text: input,
        sender: "user",
        time: moment().format("h:mm A"),
      },
    ]);
    setInput("");
    await registerFlow({
      inputType: "text",
      query: input,
      translate: translate,
      lang: selectedLanguage,
      appID: sessionStorage.getItem("userToken"),
    });
  };

  React.useEffect(() => {
    if (chatMessageRef.current) {
      chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (transcript) {
        stopRecognition();
        registerFlow({
          inputType: "voice",
          query: transcript,
          translate: translate,
          lang: selectedLanguage,
          appID: sessionStorage.getItem("userToken"),
        });

        setCheckMic(true);
        setMessages((prevChats: any) => [
          ...prevChats,
          {
            text: transcript,
            sender: "user",
            time: moment().format("h:mm A"),
          },
        ]);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [transcript]);

  useEffect(() => {
    if (chatMessageRef.current) {
      chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    pauseAudio();
    if (input && input.length > 0) {
      setMicBtn(false);
      setSendBtn(true);
    } else {
      setMicBtn(true);
      setSendBtn(false);
    }
  }, [input]);

  useEffect(() => {
    if (apiData) {
      setMessages((prevChats: any) => [
        ...prevChats,
        {
          text: apiData.response,
          sender: "bot",
          audio: apiData.audio,
          time: moment().format("h:mm A"),
        },
      ]);
    }

    if (checkMic && apiData) {
      playAudio(apiData.audio);
    }
  }, [apiData]);

  useEffect(() => {

    setMessages((prevChats: any) => [
      // ...prevChats,
      {
        text: (chatText as any)[selectedLanguage].greeting,
        sender: "bot",
        time: moment().format("h:mm A"),
        audio:  (audio as any)[selectedLanguage].greeting,
      },
      {
        text: (chatText as any)[selectedLanguage].translateTxt,
        sender: "bot",
        time: moment().format("h:mm A"),
        audio: (audio as any)[selectedLanguage].translateTxt,
      },
      // {
      //   text: (
      //     <>
      //       {options &&
      //         options !== undefined &&
      //         options.map((val: any, index: any) => (
      //           <span key={index}>
      //             <p className="schemesList" onClick={() => handleOptions(val)}>
      //               {val.val}
      //             </p>
      //           </span>
      //         ))}
      //     </>
      //   ),
      //   sender: "bot",
      //   time: moment().format("h:mm A"),
      // },
    ]);
  }, [selectedLanguage]);

  useEffect(() => {
    if (uploadData && uploadData.training) {
      setUpload(false);
      setMessages((prevChats: any) => [
        ...prevChats,
        {
          text: (chatText as any)[selectedLanguage].uploadMssg,
          sender: "bot",
          time: moment().format("h:mm A"),
          audio: (audio as any)[selectedLanguage].uploadMssg,
         
        },

        {
          text: (chatText as any)[selectedLanguage].uploadMssg1,
          sender: "bot",
          time: moment().format("h:mm A"),
          audio: (audio as any)[selectedLanguage].uploadMssg1,
        },
        //uploadMssg1
      ]);
    }
  }, [uploadData]);

  return (
    <>
      {!langFlag ? (
        <>
          <div>
            <IconButton size="medium" onClick={handleBack}>
              <ArrowBackIcon style={{ color: "rgb(252, 103, 54)" }} />
            </IconButton>
          </div>

          <div className="ContentChat" ref={chatMessageRef}>
            <audio id="audio-element" ref={audioElementRef}></audio>

            {messages &&
              messages !== undefined &&
              messages.length > 0 &&
              messages.map((message: any, index: number) => (
                <React.Fragment key={index}>
                  {message.sender === "user" && (
                    <>
                      <div className={"user"} key={index}>
                        {message.text}
                      </div>
                      <p className="timeuser">{message.time}</p>
                    </>
                  )}
                  {message.sender === "bot" && (
                    <>
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // alignItems: "flex-end",
                          padding: "10px 10px 0px 10px",
                          justifyContent: "flex-start",
                        }}
                      >
                        <img
                          src="coro.png"
                          alt="icon"
                          width="30px"
                          height="30px"
                          style={{ marginRight: "5px" }}
                        />
                        <div style={{ display: "flex" }}>
                          <div key={index} className={"bot"}>
                            <span>{message.text}</span>
                          </div>
                          {message.sender === "bot" &&
                            message.audio &&
                            message.audio !== "" && (
                              <div>
                                <span>
                                  {message.sender === "bot" &&
                                  message.audio &&
                                  currentAudioUrl === message.audio &&
                                  isPlaying ? (
                                    <>
                                      <IconButton
                                        size="small"
                                        onClick={() => pauseAudio()}
                                      >
                                        <VolumeOffIcon
                                          style={{
                                            color: "#ED2B2A",
                                            marginTop: "-5px",
                                            fontSize: "22px ",
                                          }}
                                        />
                                      </IconButton>
                                    </>
                                  ) : (
                                    <>
                                      <IconButton
                                        size="small"
                                        onClick={() => playAudio(message.audio)}
                                      >
                                        <VolumeUpIcon
                                          style={{
                                            color: "#4E9F3D",
                                            marginTop: "-5px",
                                            fontSize: "22px ",
                                          }}
                                        />
                                      </IconButton>
                                    </>
                                  )}
                                </span>
                              </div>
                            )}
                        </div>
                      </div>
                      <p className="timebot">{message.time}</p>
                    </>
                  )}
                </React.Fragment>
              ))}

            <>
              {loading && <Loading />}
              {/* <div className="BoxSentMSG" style={{ bottom: "80px " }}>
                <Button variant="outlined">Delete</Button>
                <Button variant="contained">Send</Button>
              </div> */}

              <div
                className="BoxSentMSG"
                style={{
                  bottom: "80px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant={!defaultBtn ? "outlined" : "contained"}
                  size="small"
                  style={{ width: "50%", margin: "7px" }}
                  onClick={handleTanslate}
                >
                  {(chatText as any)[selectedLanguage].button1}
                </Button>
                <Button
                  variant={defaultBtn ? "outlined" : "contained"}
                  size="small"
                  style={{ width: "50%", margin: "7px" }}
                  onClick={handleUpload}
                >
                  {(chatText as any)[selectedLanguage].button2}
                </Button>
              </div>
              <div className="BoxSentMSG">
                <input
                  placeholder={(placeholder as any)[selectedLanguage]}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  className="input"
                />

                {micBtn && (
                  <>
                    <IconButton
                      style={{
                        width: "40px",
                        margin: "0px",
                        color: "white",
                      }}
                      onClick={() => {
                        isSpeechRecognitionSupported()
                          ? startRecognition()
                          : requestPermission();
                        pauseAudio();
                      }}
                    >
                      <MicIcon style={{ color: "#0C2D57", fontSize: "30px" }} />
                    </IconButton>
                  </>
                )}

                {sendBtn && (
                  <IconButton size="large" onClick={handleSendMessage}>
                    <SendIcon style={{ color: "#0C2D57" }} />
                  </IconButton>
                )}
              </div>
            </>

            {listening && <VoiceAnimation />}
          </div>
        </>
      ) : (
        <Language />
      )}
      {upload && <Mic close={setUpload} upload={upload} />}
    </>
  );
}

export default Messages;
