import React from "react";
import Note from "./Note";
import searchFunction from "../utils/searchFunction";
import "../styles/content.css";

export default function NotesBox(props) {
  let reversedArr = props.notes;
  const [query, setQuery] = React.useState("");

  reversedArr.sort(function (a, b) {
    return b.id - a.id;
  });

  let notes = searchFunction(reversedArr, query).map((obj) => {
    return (
      <Note
        key={obj.id}
        id={obj.id}
        obj={obj}
        setNotes={props.setNotes}
        displayEdit={props.displayEdit}
        setTitleState={props.setTitleState}
      />
    );
  });

  return (
    <div className="container">
      {reversedArr.length > 1 && (
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
      <div className="content">
        {props.notes.length === 0 && (
          <h1 className="appear">Notes you add appear here</h1>
        )}
        {notes}
      </div>
    </div>
  );
}
