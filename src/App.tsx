import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/img/logo.png";
import Video from "./components/Video";
import db from "./firebase";

interface IData {
  channel: string;
  avatarSrc: string;
  url: string;
  song: string;
  shares: number;
  likes: number;
}

function App() {
  const [reels, setReels] = useState<IData[]>([]);

  useEffect(() => {
    db.collection("instareels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data() as any));
    });
  }, []);

  console.log(reels);

  return (
    <div className="app">
      <div className="app__top">
        <img src={logo} alt="Instagram Logo" className="app__logo" />
      </div>

      <div className="app__videos">
        {reels.map((reel, index) => (
          <Video
            key={index}
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            song={reel.song}
            url={reel.url}
            likes={reel.likes}
            shares={reel.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
