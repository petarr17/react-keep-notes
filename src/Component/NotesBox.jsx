import React from "react";
import Note from "./Note";
import "../styles/content.css";

export default function NotesBox(props) {
  let reversedArr = props.notes;

  reversedArr.sort(function (a, b) {
    return b.id - a.id;
  });

  let notes = reversedArr.map((obj) => {
    return (
      <Note key={obj.id} id={obj.id} obj={obj} setNotes={props.setNotes} />
    );
  });

  return (
    <div className="content">
      {props.notes.length === 0 && (
        <h1 className="appear">Notes you add appear here</h1>
      )}
      {notes}
    </div>
  );
}
