import { useState } from "react";
import DeckDisplay from "./DeckDisplay";
import LecturesDashboard from "./LecturesDashboard";
import "./index.css";

function App() {

  const [sidebarClosed, setSidebarClosed] = useState(false);


  const [selectedDeck, setSelectedDeck] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const [refreshKey, setRefreshKey] = useState(0);

  function toggleSidebar() {
    setSidebarClosed(!sidebarClosed);
  }

  return (
    <div id="layout">
      
      <div id="sidebar" className={sidebarClosed ? "close" : ""}>
        <div id="sidebar-header">
          {!sidebarClosed && <h1 className="logo">My Decks</h1>}

          <button id="toggle-btn" onClick={toggleSidebar} className={sidebarClosed ? "rotate" : ""} >
            ☰
          </button>
        </div>

        <div id="sidebar-content">
          <DeckDisplay
            isOpen={!sidebarClosed}
            refreshKey={refreshKey}
            onSelectModule={setSelectedModule}
            onSelectDeck={setSelectedDeck}
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div id="right-section">

        <div id="top-bar">
          {/* Create deck button is normally here, for the sake of demo has been removed. */}
        </div>

        <div id="display-bar">   
          <LecturesDashboard
            selectedModule={selectedModule}
            selectedDeck={selectedDeck}
            onSelectModule={setSelectedModule}
            onLectureUpdated={() => setRefreshKey((prev) => prev + 1)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;