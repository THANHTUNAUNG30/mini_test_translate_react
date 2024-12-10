import React, { useState } from 'react';
import './App.css';

const Video = () => {
  // Set initial state to the URL of Video 1
  const [videoUrl, setVideoUrl] = useState('/စရာဲကျာ်ဩဳဍုင်မန်.mp4');

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%',alignItems:'center' }}>
      <div style={{ flex: '1 1 25%', padding: '10px', margin: '5px' }}>
        <VideoLinks onVideoClick={handleVideoClick} />
      </div>
      <div style={{ flex: '1 1 75%', padding: '10px',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {videoUrl && <VideoPlayer url={videoUrl} />}
      </div>
    </div>
  );
};

const VideoLinks = ({ onVideoClick }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px',marginLeft:'140px' }}>
    <a href="#" className='vdl btn btn-warning' onClick={(e) => { e.preventDefault(); onVideoClick('/စရာဲကျာ်ဩဳဍုင်မန်.mp4'); }}>စရာဲကျာ်ဩဳဍုင်မန်</a>
    <a href="#" className='vdl btn btn-warning' onClick={(e) => { e.preventDefault(); onVideoClick('/တ္ၚဲကောန်ဂကူမန်.mp4'); }}>တ္ၚဲကောန်ဂကူမန်</a>
    <a href="#" className='vdl btn btn-warning' onClick={(e) => { e.preventDefault(); onVideoClick('/ဒိင် - ဗ္တောန်လိက်မန်အိုတ်စိုအ်.mp4'); }}>ဒိင် - ဗ္တောန်လိက်မန်အိုတ်စိုအ်</a>
    <a href="#" className='vdl btn btn-warning' onClick={(e) => { e.preventDefault(); onVideoClick('/ဒိင် - သၟတ်ဗၠာဲတံကြေဝ်ဂၠံင်.mp4'); }}>ဒိင် - သၟတ်ဗၠာဲတံကြေဝ်ဂၠံင်</a>
    <a href="#" className='vdl btn btn-warning' onClick={(e) => { e.preventDefault(); onVideoClick('/သၟာဒွက်.mp4'); }}>သၟာဒွက်</a>
  </div>
);

const VideoPlayer = ({ url }) => (
  <div style={{ position: 'relative', width: '800px',height:'400px' /* 16:9 Aspect Ratio */ }}>
    <video
      src={url}
      controls
      autoPlay
      loop
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    ></video>
  </div>
);

export default Video;
