import React from 'react';
import loadingGif from './ui/loadingGif.gif';

const LoadingScreen: React.FC = () => {
  return (
    <>
    
    <div className="flex bg-black items-center justify-center h-screen bg-white">
      <img src={loadingGif} alt="Loading..." className="w-32 h-32" />
    </div>
    
    </>
  );
};

export default LoadingScreen;
