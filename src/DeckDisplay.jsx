import { useState, useEffect } from "react";


// Deck Display Sits within the Side Bar
function DeckDisplay({ isOpen,   refreshKey, onSelectLecture, onSelectDeck }) {

  const [decks, setDecks] = useState([]);
  const [expandedDeckId, setExpandedDeckId] = useState(null);

  // Instead of backend call, fetches Sample deck from sample file. 
//   useEffect(() => {
//     const fetchDecks = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/decks");
//         setDecks(response.data);

//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (isOpen) {
//       fetchDecks();
//     }
//   }, [isOpen, refreshKey]);

  if (!isOpen) return null;

  // When a deck is clicked on the navbar, the modules should be expanded in the dropdown menu.
  const handleDisplayModules = (deckId) => {
    setExpandedDeckId((prevId) =>
      prevId === deckId ? null : deckId
    );
  };


return (
  <ul id="decks-container">
    {decks.map((deck) => (
      <li className="deck-card-container" key={deck._id}>
        
        <div
          className={`deck-card-name ${
            expandedDeckId === deck._id ? "active" : ""
          }`}
          onClick={() => {
              handleDisplayModules(deck._id);
              onSelectDeck(deck);
          }}
        >
          {deck.deckName}
        </div>

        <ul
          className={`deck-card-module-container ${
            expandedDeckId === deck._id ? "open" : ""
          }`}
        >
          <div className="deck-card-module-inner">
            {deck.lectures.map((lecture) => (
              <li
                key={lecture._id}
                className="deck-card-module-name"
                onClick={(e) => {
                  e.stopPropagation();

                  onSelectLecture(lecture);
                  console.log(lecture.lectureName);
                }}
              >
                {lecture.lectureName}
              </li>
            ))}
          </div>
        </ul>

      </li>
    ))}
  </ul>
);
}

export default DeckDisplay;