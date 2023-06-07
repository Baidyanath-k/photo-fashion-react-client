import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import poster from "../../../assets/poster.jpg";
import videos from "../../../assets/videos.mp4";
const Videos = () => {
  return (
    <div>
      <Video
        loop
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={poster}
      >
        <source src={videos} type="video/webm" />
      </Video>
    </div>
  );
};

export default Videos;
