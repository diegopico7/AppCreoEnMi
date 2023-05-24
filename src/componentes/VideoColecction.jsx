// VideoCollection.js
import React from "react";
import "../pages/video.css";

const VideoCollection = ({ videos, onVideoSelect }) => {
  return (
    <ul className="lista-coleccion">
      {videos.map((video) => (
        <li key={video.id} onClick={() => onVideoSelect(video.src)}>
          <img src={video.img} alt={video.title} className="img-video" />
          <span> {video.title} </span>
        </li>
      ))}
    </ul>
  );
};

export default VideoCollection;
