// VideoPlayer.js
import React from "react";

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="contenedor-reproductor">
      <h2>Meditaciones a tu gusto</h2>
      <video
        src={videoSrc}
        controls
        width="400"
        height="300"
        className="reproductor"
      />
    </div>
  );
};

export default VideoPlayer;
