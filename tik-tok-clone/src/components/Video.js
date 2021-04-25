import React, { useRef, useState } from "react";
import t3 from "../assets/t3.mp4";
import VideoFooter from "../VideoFooter";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  url,
  channel,
  song,
  description,
  likes,
  messages,
  shares,
}) => {
  const [playing, setplaying] = useState(false);
  const ref = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      ref.current.pause();
      setplaying(false);
    } else {
      ref.current.play();
      setplaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={ref}
        onClick={handleVideoPress}
        className="video__player"
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
