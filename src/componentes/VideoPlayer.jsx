import React from "react";
import Youtube from "../componentes/Youtube";
import YouTubeVid from "../componentes/Youtube";
const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="contenedor-reproductor">
      <h2>Meditaciones</h2>
      <video
        src={videoSrc}
        controls
        width="80%"
        height="auto"
        className="reproductor"
      />
    </div>
  );
};

export default VideoPlayer;
