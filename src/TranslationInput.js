// TranslationInput.js
import React from 'react';
import { useTranslation } from './TranslationContext';

function TranslationInput() {
  const { inputText, translatedText, handleInputChange } = useTranslation();

  return (
    <div>
      <h1>Automatic Language Translation</h1>
      <input
        type="text"
        placeholder="Enter text in English (en)"
        value={inputText}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <p>Translated text in Mongolian (mn): {translatedText}</p>
    </div>
  );
}

export default TranslationInput;
