// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';
import translations from './translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translate = (text) => {
    return translations[language][text] || text;
  };

  const handleInputChange = (text) => {
    setInputText(text);
    translateText(text);
  };

  const translateText = (text) => {
    const translation = translations[language][text.toLowerCase()];
    setTranslatedText(translation || text);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, inputText, translatedText, handleInputChange }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
