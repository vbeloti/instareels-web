import React from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>

      <div className="app__top">
        <img src={logo} alt="Instagram Logo" className="app__logo" />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <Video
          channel="Marvel"
          avatarSrc="https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/11007912_807640775983280_1278253375_a.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_ohc=tTrGJKX7JYkAX_EALL_&oh=87b3b662b096ff1571f33fc2c7f10a6f&oe=5F7D82D7"
          song="Music - Test"
          url="https://scontent-gru2-1.cdninstagram.com/v/t50.2886-16/117742831_157949959208229_4879503339197693690_n.mp4?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=r7DtZtnVRn8AX_Pxf9o&oe=5F5453B9&oh=4509703296be48390bf478e3fa3cd209"
          likes={5126}
          shares={862}
        />

        <Video
          channel="Marvel"
          avatarSrc="https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/11007912_807640775983280_1278253375_a.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_ohc=tTrGJKX7JYkAX_EALL_&oh=87b3b662b096ff1571f33fc2c7f10a6f&oe=5F7D82D7"
          song="Music - Test"
          url="https://scontent-gru2-1.cdninstagram.com/v/t50.2886-16/118698970_144554480645049_6495910052732366833_n.mp4?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=dpjpuPI-BNQAX-yGgIJ&oe=5F5485AC&oh=a181797b69e88e911887fc6cd6283c3c"
          likes={452}
          shares={1560}
        />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
