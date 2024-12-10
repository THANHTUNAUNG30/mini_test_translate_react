import React, { useState, useEffect } from 'react';
import "./App.css";
const WordList = () => {
  const [englishWord, setEnglishWord] = useState('');
  const [monWord, setMonWord] = useState('');
  const [translations, setTranslations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to load translations from localStorage
  const loadTranslations = () => {
    const storedTranslations = JSON.parse(localStorage.getItem('translations')) || [];
    setTranslations(storedTranslations);
  };

  // Load translations from localStorage on component mount
  useEffect(() => {
    loadTranslations();

    // Event listener for changes in localStorage from other tabs
    const handleStorageChange = () => {
      loadTranslations();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to handle adding a new word
  const addWord = () => {
    if (englishWord.trim() !== '' && monWord.trim() !== '') {
      const newTranslation = {
        id: translations.length + 1,
        english: englishWord.trim(),
        mon: monWord.trim(),
        audio: '' // Placeholder for audio file
      };

      const updatedTranslations = [...translations, newTranslation];
      setTranslations(updatedTranslations);
      setEnglishWord('');
      setMonWord('');

      // Save to localStorage
      localStorage.setItem('translations', JSON.stringify(updatedTranslations));
    }
  };
 // Filter translations based on search term
 const filteredTranslations = translations.filter(translation =>
  translation.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
  translation.mon.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div >
      <h2 style={{textAlign:'center'}}> Added New Word List</h2>

<div className='jj' >
      <div>
        <label htmlFor="englishWord">English Word:</label>
        <input className='form-control' 
          type="text"
          id="englishWord"
          value={englishWord}
          onChange={(e) => setEnglishWord(e.target.value)}
          placeholder="Enter a new word in English"
        />
      </div>
      <div>
        <label htmlFor="monWord">Mon Translation:</label>
        <input className='form-control' 
          type="text"
          id="monWord"
          value={monWord}
          onChange={(e) => setMonWord(e.target.value)}
          placeholder="Enter the Mon translation"
        />
      </div>
      <br />
      <button onClick={addWord} className='btn btn-primary'>Add Word</button>
      <br/> <br/>
      <input
          type="text" className='form-control'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by English or Mon"
        />
     
</div>
<br />
      <ul style={{display:'block',marginLeft:'30%',marginRight:'auto'}}>
        {filteredTranslations.map(translation => (
          <li key={translation.id}>
            <strong>English:</strong> {translation.english} <br />
            <strong>Mon:</strong> {translation.mon} <br />
            {/* Display audio if needed */}
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default WordList;
