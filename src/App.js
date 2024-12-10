import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TranslationApp from './TranslationApp';
import { Margin } from '@mui/icons-material';
import Aboutus from './Aboutus';
import Component  from './Component';
import Detail from "./Detail";
import Home from "./Home";
import MonLiterature from './MonLiterature';
import TranslationUploader from './TranslationUploader';
import Culture_Custon from './Culture&custon';
import LikeDislikeComponent from './LikeDislikeComponent';
// src/index.js or src/App.js


function App() {
  return (
    <div className="App">
      <Component/>
      
      <br /><br />
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/TranslationApp" Component={TranslationApp} />
   
        <Route path="/Detail" Component={Detail} />
        <Route path="/Aboutus" Component={Aboutus} />
        <Route path="/MonLiterature" Component={MonLiterature} />
        <Route path="/Culture_Custon" Component={Culture_Custon} />
    
      </Routes>

      <div>
    </div>
    </div>
  );
}

export default App;
