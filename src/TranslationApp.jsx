import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  IconButton,
  Tooltip
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import translationsData from "./translations.json"; // Import translations data
import About from "./About";
import enTranslations from "./en.json";
import mnTranslations from "./mn.json";
import myanTranslations from "./myan.json";
import "./App.css";
import LikeDislikeComponent from "./LikeDislikeComponent";

const TranslationApp = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [currentAudio, setCurrentAudio] = useState(""); // State to hold current audio filename
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(false); // New state to track icon hover
  const [limitReached, setLimitReached] = useState(false); // State to track if character limit is reached
  const maxLength = 350; // Maximum character length

  // Function to handle text input change
  const handleTextChange = (event) => {
    const inputText = event.target.value; // Get input text
    setSourceText(inputText); // Update the source text

    if (inputText.length > maxLength) {
      setLimitReached(true); // Set limit reached state
      setTranslatedText(""); // Clear translated text
      setCurrentAudio(""); // Clear audio
    } else {
      setLimitReached(false); // Reset limit reached state

      if (inputText.trim() === "") {
        setTranslatedText("");
        setCurrentAudio("");
      } else {
        const words = inputText.trim().split(/\s+/); // Split input text into words
        let translation = "";
        let foundAudio = "";

        // Check for exact phrase matches first
        let matchedPhrase = translationsData.translations.find(
          (t) => t.english.toLowerCase() === inputText.trim().toLowerCase()
        );

        if (matchedPhrase) {
          translation = matchedPhrase.mon;
          foundAudio = matchedPhrase.audio;
        } else {
          // Translate each word and concatenate the results
          words.forEach((word, index) => {
            const matchedTranslation = translationsData.translations.find(
              (t) => t.english.toLowerCase() === word.toLowerCase()
            );

            if (matchedTranslation) {
              translation += (index > 0 ? " " : "") + matchedTranslation.mon;
              if (!foundAudio) {
                foundAudio = matchedTranslation.audio; // Set current audio filename if available
              }
            } else {
              // Predict nearest translation using Levenshtein distance or similar
              const closestMatch = findClosestMatch(word.toLowerCase());
              translation +=
                (index > 0 ? " " : "") +
                (closestMatch ? closestMatch.mon : "Translation not found!");
              if (!foundAudio && closestMatch) {
                foundAudio = closestMatch.audio; // Set current audio filename if match found
              }
            }
          });
        }

        setTranslatedText(translation);
        setCurrentAudio(foundAudio);
      }
    }
  };

  // Function to find closest match based on Levenshtein distance
  const findClosestMatch = (inputText) => {
    let minDistance = Infinity;
    let closestTranslation = null;

    translationsData.translations.forEach((t) => {
      const distance = levenshteinDistance(inputText, t.english.toLowerCase());
      if (distance < minDistance) {
        minDistance = distance;
        closestTranslation = t;
      }
    });

    return closestTranslation;
  };

  // Function to calculate Levenshtein distance
  const levenshteinDistance = (word1, word2) => {
    const dp = Array.from(Array(word1.length + 1), () =>
      Array(word2.length + 1).fill(0)
    );

    for (let i = 0; i <= word1.length; i++) {
      for (let j = 0; j <= word2.length; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else {
          const substitutionCost = word1[i - 1] === word2[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + substitutionCost
          );
        }
      }
    }

    return dp[word1.length][word2.length];
  };

  // Function to handle audio playback
  const handleAudioPlay = () => {
    if (currentAudio) {
      const audioFilePath = process.env.PUBLIC_URL + `/audio/${currentAudio}`;
      const audio = new Audio(audioFilePath);
      audio.play();
    }
  };

  const [language, setLanguage] = useState("myan"); // Default language is English
  const translations = {
    en: enTranslations,
    mn: mnTranslations,
    myan: myanTranslations
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleIconMouseEnter = () => {
    setHoveredIcon(true);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(false);
  };

  const getImageStyle = (index) => ({
    width: "350px",
    height: "auto",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
    borderRadius: "10px"
  });

  const imagePaths = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  return (
    <>
      <h1 style={{ marginLeft: "8%", color: "red" }}>Translate Text</h1>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="d-flex justify-content-center"
      >
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            label="Enter English Text"
            onChange={handleTextChange}
            value={sourceText} // Bind the value to the sourceText state
          />
          {/* Display character count */}
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              marginTop: "8px",
              backgroundColor: "#f0f0f0", // Light grey background for the box
              padding: "5px",
              borderRadius: "5px",
              display: "inline-block"
            }}
          >
            {sourceText.length}/{maxLength}
          </Typography>
          {/* Display limit reached message */}
          {limitReached && (
            <Typography
              variant="body2"
              color="error"
              style={{
                marginTop: "8px",
                backgroundColor: "#fdd",
                padding: "5px",
                borderRadius: "5px",
                display: "inline-block"
              }}
            >
              Character limit reached. Please shorten your text.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            label="Translated Mon Text"
            value={translatedText}
            InputProps={{ readOnly: true }}
          />
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "10px"
            }}
          >
            {/* Conditionally render "Speaker" text */}
            {hoveredIcon && (
              <Typography
                variant="body2"
                style={{
                  position: "absolute",
                  top: "-30px", // Adjust to place above the icon
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "black",
                  backgroundColor: "white", // Gray background color
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  zIndex: 10 // Ensure it appears above other content
                }}
              >
                Speaker
              </Typography>
            )}
            <Tooltip arrow>
              <IconButton
                onClick={handleAudioPlay}
                onMouseEnter={handleIconMouseEnter}
                onMouseLeave={handleIconMouseLeave}
                disabled={
                  !currentAudio || translatedText === "Translation not found!"
                }
                color="primary"
                aria-label="play translated audio"
              >
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            {/* Only show "Voice Not Available" if the icon is not hovered and audio is not available */}
            {!hoveredIcon &&
              !currentAudio &&
              translatedText !== "Translation not found!" && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    marginLeft: "8px",
                    display: "inline-block"
                  }}
                >
                  Voice Not Available
                </Typography>
              )}
          </div>
        </Grid>
      </Grid>

      <LikeDislikeComponent />
      <br />

      <div style={{ background: "beige" }}>
        <select
          onChange={handleLanguageChange}
          value={language}
          className="language-select"
          style={{ margin: "2% 0 0 2%", background: "#C34A2C", color: "white" }}
        >
          <option value="mn">Translate to Mon</option>
          <option value="myan">Translate to Burmese</option>
          <option value="en">Translate to English</option>
        </select>

        <h2 style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>
          {translations[language]["title"]}
        </h2>
        <p className="me" style={{ textIndent: "80px" }}>
          {translations[language]["main.text"]}
          {translations[language]["script.text"]}
        </p>

        <br />
        <br />

        <div className="image-grid">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="image-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={path}
                alt={`Image ${index + 1}`}
                style={getImageStyle(index)}
              />
            </div>
          ))}
        </div>

        <br />
        <br />

        <h3 style={{ marginLeft: "2%", color: "red", fontWeight: "bolder" }}>
          {translations[language]["time.title"]}
        </h3>
        <p className="me">{translations[language]["time1.text"]}</p>
        <p className="me">{translations[language]["time2.text"]}</p>
        <p className="me">{translations[language]["time3.text"]}</p>
        <p className="me">{translations[language]["place1.text"]}</p>
        <p className="me">{translations[language]["place2.text"]}</p>
        <p className="me">{translations[language]["place3.text"]}</p>
      </div>
      <About />
    </>
  );
};

export default TranslationApp;
