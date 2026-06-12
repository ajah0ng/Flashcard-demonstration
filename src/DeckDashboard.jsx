import { useState } from "react";

function DeckDashboard({
  selectedLecture,
  selectedDeck,
  onSelectLecture,
  onLectureUpdated
}) {

  const [editingLectureId, setEditingLectureId] = useState(null);
  const [lectureName, setLectureName] = useState("");

  if (!selectedDeck) {
    return null;
  }

  return (
    <div id="deck-dashboard-container">

      <h1>{selectedDeck.lectureName}</h1>

      <div id="modules-container">

        {selectedDeck.lectures.map((lecture) => (

          <div
            key={lecture._id}
            className={`dashboard-module-card ${
              selectedLecture?._id === lecture._id
                ? "active"
                : ""
            }`}
            onClick={() => onSelectLecture(lecture)}
            onDoubleClick={() => startEditing(lecture)}
          >

            {editingLectureId === lecture._id ? (

              <input
                className="lecture-edit-input"
                type="text"
                value={lectureName}
                autoFocus
                onChange={(e) => setLectureName(e.target.value)}
                onBlur={() => saveLectureName(lecture)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveLectureName(lecture);
                  }
                }}
              />

            ) : (

              <h3>{lecture.lectureName}</h3>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default DeckDashboard;