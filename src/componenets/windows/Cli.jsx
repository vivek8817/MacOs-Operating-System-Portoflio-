import MacWindow from "./MacWindow";
import TerminalModule from "react-console-emulator";
import "./cli.scss";

const Terminal = TerminalModule.default
  ? TerminalModule.default
  : TerminalModule;

const Cli = ({ windowName, setWindowsState, zIndex, bringToTop }) => {
  // Define all custom commands here
  const commands = {
    about: {
      description: "Who am I?",
      usage: "about",
      fn: () =>
        "Hi, I'm Vivek Ahirwar. A Frontend Developer specializing in React.js and the MERN stack with a strong background in UI/UX.",
    },
    skills: {
      description: "List of my technical skills.",
      usage: "skills",
      fn: () =>
        "Tech Stack: React.js, Node.js, Express, MongoDB, TypeScript, and Redux Toolkit. Design: Minimalist, high-contrast dark mode interfaces.",
    },
    projects: {
      description: "View my recent work.",
      usage: "projects",
      fn: () => `My recent builds:
  1. Padhantu - A digital education platform for grades 6-10.
  2. NotedWork - A platform for verified workplace reviews.
  3. CRM Dashboard - Employee management interface.
  4. Kanban Board - Trello-style task management.`,
    },
    experience: {
      description: "My professional background.",
      usage: "experience",
      fn: () =>
        "UI/UX Intern @ Ghackk Technologies (Oct 2025 - Feb 2026)\nCollaborated with a remote team on pre-launch product concepts.",
    },
    education: {
      description: "My academic background.",
      usage: "education",
      fn: () =>
        "B.Com at Shaheed Bhagat Singh College, University of Delhi (Expected May 2026).",
    },
    contact: {
      description: "How to reach me.",
      usage: "contact",
      fn: () =>
        "Location: Bhopal, Madhya Pradesh\nGitHub: github.com/yourusername\nLinkedIn: linkedin.com/in/yourusername",
    },
    secret: {
      description: "Classified information.",
      usage: "secret",
      fn: () =>
        "I strictly enforce an 8-point grid system in all my designs. Oh, and the Cowboy Bebop aesthetic is unmatched. See you space cowboy...",
    },
  };

  // Multiline welcome message with ASCII Border
  const welcomeText = `
  ┌──────────────────────────────────────────────────┐
  │                                                  │
  │   Welcome to the Terminal!                       │
  │   Type any of the following commands to explore: │
  │                                                  │
  │     about       - Who am I?                      │
  │     skills      - My technical toolkit           │
  │     projects    - Recent work & builds           │
  │     experience  - Professional background        │
  │     education   - Academic journey               │
  │     contact     - Let's connect                  │
  │     secret      - ???                            │
  │     clear       - Clears the terminal output     │
  │                                                  │
  └──────────────────────────────────────────────────┘
  `;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} zIndex={zIndex} bringToTop={bringToTop}>
      <div className="cli-window">
        <Terminal
          welcomeMessage={welcomeText}
          commands={commands}
          promptLabel={"vivek@MeRnDev:~$"}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
