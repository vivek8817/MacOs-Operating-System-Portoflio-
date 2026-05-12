import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowsState,
  zIndex=0,
  bringToTop,
}) => {
  return (
    <Rnd default={{ width: width, height: height, x: 300, y: 200 }} style={{zIndex: zIndex}} onMouseDown={() => bringToTop?.(windowName)}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() => {
                setWindowsState((prev) => ({ ...prev, [windowName]: false }));
              }}
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>VivekAhirwar - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
