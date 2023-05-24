// PaginaVideo.js
import React, { useState } from "react";
import VideoPlayer from "../componentes/VideoPlayer";
import VideoCollection from "../componentes/VideoColecction";
import "../pages/video.css";

const PaginaVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Meditación Profunda",
      src: "/src/img/videos/incienso.mp4",
      img: "/src/img/meditacion2.jpg",
    },
    {
      id: 2,
      title: "Meditación con lluvia",
      src: "/src/img/videos/lluvia.mp4",
      img: "/src/img/meditacion04.jpg",
    },
    {
      id: 3,
      title: "Meditación con Mar",
      src: "/src/img/videos/incienso.mp4",
      img: "/src/img/meditacion3.jpg",
    },
  ];

  useState(() => {
    if (videos.length > 0) {
      setSelectedVideo(videos[0].src);
    }
  }, []);

  const handleVideoSelect = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  return (
    <div className="contenedor-gral-video">
      <VideoPlayer videoSrc={selectedVideo} />
      <VideoCollection videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default PaginaVideo;
