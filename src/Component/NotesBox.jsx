import React from "react";
import Note from "./Note";
import searchFunction from "../utils/searchFunction";
import "../styles/content.css";

export default function NotesBox({
  notes,
  setNotes,
  displayEdit,
  setTitleState,
}) {
  const [query, setQuery] = React.useState("");
  const [displayNotes, setDisplayNotes] = React.useState([]);

  React.useEffect(() => {
    const currentNotes = searchFunction(notes, query);
    setDisplayNotes(currentNotes);
  }, [notes, query]);

  return (
    <div className="container">
      {displayNotes.length > 1 && (
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
      <div className="content">
        {displayNotes.length === 0 && (
          <h1 className="appear">Notes you add appear here</h1>
        )}
        {displayNotes.map((obj) => {
          return (
            <Note
              key={obj.id}
              id={obj.id}
              obj={obj}
              setNotes={setNotes}
              displayEdit={displayEdit}
              setTitleState={setTitleState}
            />
          );
        })}
      </div>
    </div>
  );
}
