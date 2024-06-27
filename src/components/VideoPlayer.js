// components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-ads';
import 'videojs-ima';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      fluid: true,
      plugins: {
        ima: {
          adTagUrl: 'https://mellow-weird.com/dJmaF.z/dTGuN/v/ZjGOUo/Ue/mK9NutZ_UXl/kSPvTcUO0gMYTKYR1/OtD/Y/t/NbTeQQxmN/jUUY4GNZwG'
        }
      }
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin"></video>
    </div>
  );
};

export default VideoPlayer;
