import React, { useState, useRef } from "react";

import "./styles.css";
import VideoHeader from "../VideoHeader";
import VideoFooter from "../VideoFooter";

interface IVideos {
  channel?: string;
  avatarSrc?: string;
  song?: string;
  url?: string;
  likes?: number;
  shares?: number;
}

const Video: React.FC<IVideos> = ({
  channel,
  avatarSrc,
  song,
  url,
  likes,
  shares,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef?.current?.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="video">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        src={url}
        loop
      />
      <VideoFooter 
      channel={channel}
      avatarSrc={avatarSrc}
      song={song}
      likes={likes}
      shares={shares}
      />
    </div>
  );
};

export default Video;
