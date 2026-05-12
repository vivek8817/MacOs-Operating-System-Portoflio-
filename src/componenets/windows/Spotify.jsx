import MacWindow from "./MacWindow";

const Spotify = ({ windowName, setWindowsState, zIndex, bringToTop }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      bringToTop={bringToTop}
      width="max(30vh,40rem)"
    >
      <div className="spotify-window">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/7JLsTzrT4JnZKeSlTwMLvG?utm_source=generator"
          width="100%"
          height="480px"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
