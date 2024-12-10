import React, { useState } from 'react';
import translationsData from './translations.json'; // Assuming you have translations stored in translations.json
import About from './About'
import Mon from './Mon';
import enTranslations from './en.json';
import mnTranslations from './mn.json';
import myanTranslations from './myan.json';
import './App.css';

const TranslationUploader = () => {
  const [file, setFile] = useState(null);
  const [translations, setTranslations] = useState([]);

  // Example local translation dictionary (replace with your actual data)
  const translationDictionary = translationsData.translations.reduce((dict, t) => {
    dict[t.english.toLowerCase()] = t.mon;
    return dict;
  }, {});

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      // Example: Process text (in real app, you'd parse based on file type)
      const translatedText = await translateToMongolian(text);
      const translation = {
        id: translations.length + 1,
        english: text, // Replace with actual English text
        mon: translatedText, // Replace with actual Mongolian translation
        audio: 'hello.mp3' // Example audio file name
      };
      setTranslations([...translations, translation]);
    };
    reader.readAsText(file);
  };

  const translateToMongolian = async (text) => {
    const lowerCaseText = text.toLowerCase().trim();

    // Split text into words or process the whole sentence as needed
    const words = lowerCaseText.split(/\s+/);

    // Translate each word or handle the entire sentence
    const translatedWords = await Promise.all(
      words.map(async (word) => {
        const translation = translationDictionary[word];
        if (translation) {
          return translation;
        } else {
          // Handle prediction for near words or sentences here
          const closestMatch = findClosestMatch(word);
          if (closestMatch) {
            return closestMatch.mon;
          } else {
            // If no close match found, return a default message
            return `Translation not found for '${word}'`;
          }
        }
      })
    );

    // Join translated words back into a sentence (if input was a sentence)
    return translatedWords.join(' ');
  };

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
    const dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1).fill(0));

    for (let i = 0; i <= word1.length; i++) {
      for (let j = 0; j <= word2.length; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else {
          const substitutionCost = word1[i - 1] === word2[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + substitutionCost);
        }
      }
    }

    return dp[word1.length][word2.length];
  };

  const [language, setLanguage] = useState('en'); // Default language is English
    const translationsText = {
        'en': enTranslations,
        'mn': mnTranslations,
        'myan': myanTranslations
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };


  return (
    <>
 
   
<div className='container' style={{display:'block',marginLeft:'auto',marginRight:'auto'}}>
    <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title"style={{color:'red'}}>File Upload</h5>
    <label class="form-label" for="customFile">Default file input example</label>
    <input type="file" class="form-control" id="customFile"   onChange={handleFileChange} /><br />
    <button onClick={handleUpload} className='btn btn-primary'>Upload</button>
  </div>
</div>
<br/><br />

<div class="card w-75">
  <div class="card-body">
    <h5 class="card-title" style={{color:'red'}}>Translated Text Eng To Mon</h5>
    <p class="card-text">
    <ul>
        {translations.map((translation) => (
          <li key={translation.id}>
            <p>English: {translation.english}</p>
            <p>MonLanguage: {translation.mon}</p>
            {/* Add audio player for translation.audio */}
          </li>
        ))}
      </ul>
    </p>

  </div>
</div>
</div>


<br /><br />
<div style={{background:'beige'}}>
<select onChange={handleLanguageChange} 
                        value={language} 
                        className='language-select'
                        style={{ margin: '1% 0 0 2%',background:'#C34A2C',color:'white' }}
                    >
                        <option value="mn">Translate To Mon</option>
                        <option value="myan">Translate To Myanmar</option>
                        <option value="en">Translate To English</option>
                    </select>
      <h1 style={{textAlign:'center',color:'red'}}> {translationsText[language]['religion.title']} </h1>

<br />
      <p className='me'>
        {translationsText[language]['religion.text']}  
      </p>






 

      <div class="responsive-three-column-grid container">
    <div><img src='https://upload.wikimedia.org/wikipedia/commons/8/87/Ban-talat-Mon-inscription.jpg'
    
    style={{width:'200px'}}
    
    /></div>
    <div>

    <img src='mi.jpg'
    
    style={{width:'200px'}}
    
    />

    </div>
    <div> <img src='mi1.jpg'
    
    style={{width:'200px'}}
    
    /></div>
</div>




</div>





<div>


</div>

<About />



    </>
  );
};

export default TranslationUploader;