import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState, zIndex, bringToTop }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} zIndex={zIndex} bringToTop={bringToTop}>
      <div className="resume-window">
        <iframe src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
