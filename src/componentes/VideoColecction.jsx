import React from "react";
import "../pages/video.css";

const VideoCollection = ({ videos, onVideoSelect }) => {
  return (
    <ul className="lista-coleccion">
      {videos.map((video) => (
        <li
          key={video.id}
          onClick={() => onVideoSelect(video.src)}
          className="lista-videos"
        >
          <img src={video.img} alt={video.title} className="img-video" />
          <span className="titulo-videos"> {video.title} </span>
        </li>
      ))}
    </ul>
  );
};

export default VideoCollection;
