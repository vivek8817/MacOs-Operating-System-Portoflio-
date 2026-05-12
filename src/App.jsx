import { useState } from "react";
import "./app.scss";
import Dock from "./componenets/Dock";
import Nav from "./componenets/Nav";
import Github from "./componenets/windows/Github";
import Note from "./componenets/windows/Note";
import Resume from "./componenets/windows/Resume";
import Spotify from "./componenets/windows/Spotify";
import Cli from "./componenets/windows/Cli";

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const [zIndexs, setzIndexs] = useState({});
  const [zCounter, setzCounter] = useState(1);

  const bringToTop = (windowName) => {
    setzIndexs((prevzInd) => ({
      ...prevzInd,
      [windowName]: zCounter,
    }));
    setzCounter((prevzCounter) => prevzCounter + 1);
  };

  return (
    <main>
      <Nav />
      <Dock setWindowsState={setWindowsState} windowsState={windowsState} />

      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          zIndex={zIndexs["github"] ?? 0}
          bringToTop={bringToTop}
        />
      )}
      {windowsState.note && (
        <Note
          windowName="note"
          setWindowsState={setWindowsState}
          zIndex={zIndexs["note"] ?? 0}
          bringToTop={bringToTop}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          zIndex={zIndexs["resume"] ?? 0}
          bringToTop={bringToTop}
        />
      )}
      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          zIndex={zIndexs["spotify"] ?? 0}
          bringToTop={bringToTop}
        />
      )}
      {windowsState.cli && (
        <Cli
          windowName="cli"
          setWindowsState={setWindowsState}
          zIndex={zIndexs["cli"] ?? 0}
          bringToTop={bringToTop}
        />
      )}
    </main>
  );
};

export default App;
