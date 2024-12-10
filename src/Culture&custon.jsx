import React, { useState } from "react";
import translationsData from "./translations.json"; // Assuming you have translations stored in translations.json
import About from "./About";
import Mon from "./Mon";
import enTranslations from "./en.json";
import mnTranslations from "./mn.json";
import myanTranslations from "./myan.json";
import Video from "./video";
import "./App.css";
import ReactPlayer from "react-player/youtube";

const Culture_Custon = () => {
  const [language, setLanguage] = useState("myan"); // Default language is English
  const translations = {
    en: enTranslations,
    mn: mnTranslations,
    myan: myanTranslations
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const [selectedVideo, setSelectedVideo] = useState("/vd1.mp4");

  const handleVideoSelect = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  return (
    <>
      <div style={{}}>
        <h1
          className="meHeader cc"
          style={{ textAlign: "center", paddingBottom: "20px" }}
        >
          {translations[language]["mondance.title"]}
        </h1>
        <Video />
      </div>
      <div style={{ background: "beige" }}>
        <select
          onChange={handleLanguageChange}
          value={language}
          className="language-select"
          style={{ margin: "1% 0 0 2%", background: "#C34A2C", color: "white" }}
        >
          <option value="mn">Translate to Mon</option>
          <option value="myan">Translate to Burmese</option>
          <option value="en">Translate to English</option>
        </select>

        <h4 className="meHeader cc" style={{ textAlign: "center" }}>
          {translations[language]["religion.title"]}
        </h4>
        <p className="me" style={{ textIndent: "80px" }}>
          {translations[language]["religion.text"]}
        </p>

        <br />

        <div className="responsive-two-column-grid">
          <div style={{ marginLeft: "60px" }}>
            <h4 className="meHeader cc">
              {translations[language]["traditionalcustoms.title"]}
            </h4>
            <p className="me">
              {translations[language]["traditionalcustoms.text"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text1"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text2"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text3"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text4"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text5"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text6"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text7"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text8"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text9"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text10"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text11"]}
            </p>
            <p className="me">
              {translations[language]["traditionalcustoms.text12"]}
            </p>
          </div>

          <div>
            <img
              src="c.jpg"
              className="logo"
              style={{
                width: "67%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "27px",
                marginRight: "20%"
              }}
              alt="Mon"
            />
            <img
              src="d.jpg"
              className="logo"
              style={{
                width: "67%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "10px",
                marginRight: "5%"
              }}
              alt="Mon"
            />
          </div>
        </div>

        <div className="responsive-two-column-grid">
          <div>
            <img
              src="in1.jpg"
              className="logo"
              style={{
                width: "78%",
                height: "300px",
                borderRadius: "10px",
                marginTop: "35px",
                marginLeft: "8%"
              }}
              alt="Mon"
            />
            <img
              src="in2.jpg"
              className="logo"
              style={{
                width: "80%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "10px",
                marginLeft: "18%"
              }}
              alt="Mon"
            />
          </div>

          <div>
            <h4 className="meHeader cc">
              {translations[language]["culture.title"]}
            </h4>
            <p className="me">{translations[language]["culture.text"]}</p>
            <p className="me">{translations[language]["culture.text1"]}</p>
            <p className="me a">{translations[language]["culture.text1a"]}</p>
            <p className="me a">{translations[language]["culture.text1b"]}</p>
            <p className="me a">{translations[language]["culture.text1c"]}</p>
            <p className="me">{translations[language]["culture.text2"]}</p>
            <p className="me a">{translations[language]["culture.text2a"]}</p>
            <p className="me a">{translations[language]["culture.text2b"]}</p>
            <p className="me a">{translations[language]["culture.text2c"]}</p>
            <p className="me a">{translations[language]["culture.text2d"]}</p>
            <p className="me a">{translations[language]["culture.text2e"]}</p>
            <p className="me">{translations[language]["culture.text3"]}</p>
          </div>
        </div>
        <p className="me" style={{ textIndent: "80px" }}>
          {translations[language]["culture.text4"]}
        </p>
      </div>

      <About />
    </>
  );
};

export default Culture_Custon;
