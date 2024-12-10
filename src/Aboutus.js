import React, { useState } from 'react';
import enTranslations from './en.json';
import mnTranslations from './mn.json';
import myanTranslations from './myan.json';
import About from './About';
import './App.css';

const Aboutus = () => {
    const [language, setLanguage] = useState('myan'); // Default language is English
    const [translations] = useState({
        'en': enTranslations,
        'mn': mnTranslations,
        'myan': myanTranslations
    });

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    };

    return (
        <>
            <img 
                //src='http://ucstt.edu.mm/wp-content/uploads/2019/10/slider1-1024x632.jpeg' 
                src='aboutus.jpg'
                alt="School" 
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '40%',
                    height: 'auto',
                    borderRadius: '7px'
                }} 
            />

            <br /><br />

            <div className='' style={{ background: 'beige' }}>
                <div className='left' style={{ background: 'beige' }}>
                    <br /><br />
                    <select 
                        onChange={handleLanguageChange} 
                        value={language} 
                        className='language-select'
                        style={{ marginLeft: '2%',background:'#C34A2C',color:'white' }}
                    >
                        <option value="mn">Translate to Mon</option>
                        <option value="myan">Translate to Burmese</option>
                        <option value="en">Translate to English</option>
                    </select>
                    <br /><br />
                    <h2 
                        style={{ 
                            color: 'red', 
                            width: '100%', 
                            marginBottom: '0',
                            textAlign: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bolder' 
                        }}
                    >
                        {translations[language]['welcome.title']}
                    </h2>
                    <p className='aboutText'>
                        {translations[language]['welcome.text']}  
                    </p>
                    <br />
                    <h2 
                        style={{ 
                            color: 'red', 
                            width: '100%', 
                            marginLeft: '2%',
                            textAlign: 'center',
                            fontWeight: 'bold' 
                        }}
                    >
                        {translations[language]['why']}
                    </h2>
                    <h4 className='aboutHeader'>
                        {translations[language]['preserving.title']}
                    </h4>
                    <p className='aboutText'>
                        {translations[language]['preserving.text']}  
                    </p>
                    <br />
                    <h4 className='aboutHeader'>
                        {translations[language]['facilities.title']}
                    </h4>
                    <p className='aboutText'>
                        {translations[language]['facilities.text']}  
                    </p>
                    <br />
                    <h4 className='aboutHeader'>
                        {translations[language]['vision.title']}
                    </h4>
                    <p className='aboutText'>
                        {translations[language]['vision.text']}  
                    </p>
                    <br />
                    <h4 className='aboutHeader'>
                        {translations[language]['join.title']}
                    </h4>
                    <p className='aboutText'>
                        {translations[language]['join.text']}  
                    </p>
                    <br />
                </div>
            </div>
        <About />

        </>
    );
};

export default Aboutus;
