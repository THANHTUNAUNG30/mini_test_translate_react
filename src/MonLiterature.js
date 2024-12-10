import React, { useState } from "react";
import enTranslations from "./en.json";
import mnTranslations from "./mn.json";
import myanTranslations from "./myan.json";
import About from "./About";
import Slideshow from "./Slideshow";
import "./App.css";
import { Slideshow as MUISlideshowIcon } from "@mui/icons-material";

const MonLiterature = () => {
  const [language, setLanguage] = useState("myan"); // Default language is English
  const translations = {
    en: enTranslations,
    mn: mnTranslations,
    myan: myanTranslations
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className="responsive-two-column-grid">
        <div style={{ marginLeft: "80px" }}>
          <h2
            style={{
              color: "red",
              width: "100%",
              marginBottom: "0",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bolder"
            }}
          >
            {translations[language]["traditional.title"]}
          </h2>
          <p
            style={{
              color: "black",
              textAlign: "justify",
              fontSize: "24px",
              textIndent: "60px",
              paddingTop: "25px"
            }}
          >
            {translations[language]["traditional.text"]}
          </p>
        </div>
        <div>
          <Slideshow
            photos={[
              "/s1.jpg",
              "/s2.jpg",
              "/s3.jpg",
              "/s4.jpg",
              "/s5.jpg",
              "/s6.jpg",
              "/s7.jpg"
            ]}
          />
          <MUISlideshowIcon style={{ fontSize: 40, color: "#007bff" }} />
        </div>
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
        <br />
        <br />

        <div className="responsive-two-column-grid">
          <div>
            <img
              src="mandress.jpg"
              className="logo"
              style={{
                width: "80%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "60px"
              }}
              alt="Mon"
            />
          </div>

          <div>
            <h4 className="meHeader">
              {translations[language]["mendress.title"]}
            </h4>
            <p className="me" style={{ textIndent: "60px" }}>
              {translations[language]["mendress.text"]}
            </p>
            <p className="me">{translations[language]["mendress.text1"]}</p>
            <p className="me">{translations[language]["mendress.text2"]}</p>
            <p className="me">{translations[language]["mendress.text3"]}</p>
            <p className="me">{translations[language]["mendress.text4"]}</p>
            <p className="me">{translations[language]["mendress.text5"]}</p>
            <p className="me">{translations[language]["mendress.text6"]}</p>

            <h4 className="meHeader">
              {translations[language]["longyi.title"]}
            </h4>
            <p className="me">{translations[language]["longyi.text1"]}</p>
            <p className="me">{translations[language]["longyi.text3"]}</p>
            <p className="me">{translations[language]["longyi.text4"]}</p>
            <p className="me">{translations[language]["longyi.text5"]}</p>
          </div>
        </div>

        <div className="responsive-two-column-grid">
          <div>
            <h4 className="womanH">{translations[language]["women"]}</h4>
            <h4 className="womanH">{translations[language]["blouse.title"]}</h4>
            <p className="womanT">{translations[language]["blouse.text1"]}</p>
            <p className="womanT">{translations[language]["blouse.text2"]}</p>
            <p className="womanT">{translations[language]["blouse.text3"]}</p>
            <p className="womanT">{translations[language]["blouse.text4"]}</p>
            <p className="womanT">{translations[language]["blouse.text5"]}</p>
            <p className="womanT">{translations[language]["blouse.text6"]}</p>

            <h4 className="womanH">
              {translations[language]["htamein.title"]}
            </h4>
            <p className="womanT">{translations[language]["htamein.text1"]}</p>
            <p className="womanT">{translations[language]["htamein.text2"]}</p>
            <p className="womanT">{translations[language]["htamein.text3"]}</p>
            <p className="womanT">{translations[language]["htamein.text4"]}</p>
            <p className="womanT">{translations[language]["htamein.text5"]}</p>
            <p className="womanT">{translations[language]["htamein.text6"]}</p>
            <p className="womanT">{translations[language]["htamein.text7"]}</p>
          </div>

          <div>
            <img
              src="ucsttwomandress.jpg"
              className="logo"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginTop: "60px"
              }}
              alt="Mon"
            />
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default MonLiterature;
