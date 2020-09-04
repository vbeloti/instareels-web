import React, { useState, useRef } from "react";

import "./styles.css";

const Video: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef?.current?.pause();
      setIsVideoPlaying(false);
    }else {
        videoRef?.current?.play();
        setIsVideoPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        src="https://scontent-gru2-1.cdninstagram.com/v/t50.2886-16/117742831_157949959208229_4879503339197693690_n.mp4?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=r7DtZtnVRn8AX_Pxf9o&oe=5F5453B9&oh=4509703296be48390bf478e3fa3cd209"
        loop
      />
    </div>
  );
};

export default Video;
