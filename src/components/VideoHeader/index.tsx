import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';

import './styles.css';

const VideoHeader: React.FC = () => {
  return (
      <div className="videoHeader">
          <ArrowBackIosIcon />
            <h3>Reels</h3>
          <CameraOutlinedIcon />
      </div>
  );
}

export default VideoHeader;