import Options from "./Options";
import { languageList } from "../../utils/data";
import { reducer, flowReducer } from "../../store/Redux-selector/Selector";
import { useSelector } from "react-redux";
import { LanguageHeader } from "../../translation";
import {
  setLangFlag,
  setSelectedLanguage,
} from "../../store/Redux-Dispatcher/Dispatcher";
import {
  setChatbot_view,
  setLanguage_view,
} from "../../store/Redux-Dispatcher/FlowDispatcher";
import { IconButton } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import { LogoImage } from "../../ChatBot/Body/Style";

function Language() {
  const { selectedLanguage, checkFileUpload, chatbotView } =
    useSelector(reducer);
  const handleLanguageClick = (languageName: any) => {
    const lang = languageList.find((lang) => lang.name === languageName);
    lang && setSelectedLanguage(lang.id);
  };

  const handleLanguage = () => {
 

    if (checkFileUpload) {
      setLanguage_view(false);
      setLangFlag(false);
    } else {
      setLanguage_view(false);
      setChatbot_view(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height:"100vh"
        }}
      >
        <LogoImage
          className={"LogoImage"}
          src="logocoro.png"
          alt="header"
          style={{ height: "200px !important" }}
        />
        <div style={{ marginTop: "30px" }}>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {(LanguageHeader as any)[selectedLanguage]}
          </p>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
            }}
          >
            {languageList.map((language) => (
              <Options
                key={language.id}
                border={`1px solid ${language.color}`}
                color={
                  selectedLanguage === language.id ? "white" : language.color
                }
                bgColor={
                  selectedLanguage === language.id ? language.color : "white"
                }
                heading={language.name}
                firstLetter={language.firstLetter}
                onClick={() => handleLanguageClick(language.name)}
              />
            ))}
          </div>
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
            onClick={handleLanguage}
          >
            <EastIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Language;
