import React from "react";

import "./styles.css";

interface IVideoFooter {
  channel?: string;
  avatarSrc?: string;
  song?: string;
  likes?: number;
  shares?: number;
}

const VideoFooter: React.FC<IVideoFooter> = () => {
  return (
      <div className="videoFooter">
          
      </div>
  );
};

export default VideoFooter;
