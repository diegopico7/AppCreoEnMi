import React from "react";
import YouTube from "react-youtube";

const YouTubeVid = () => {
  const videoId = "TQ_Qb3GAOEo";

  return (
    <div>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default YouTubeVid;
