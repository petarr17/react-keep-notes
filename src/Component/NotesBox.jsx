import React from "react";
import Note from "./Note";
import "../styles/content.css";

export default function NotesBox(props) {
  const [arrayNotes, updateArr] = React.useState([]);

  React.useEffect(() => {
    let localkeys = Object.keys(localStorage);
    let arr = [];
    localkeys.forEach(function (l) {
      l = parseInt(l);
      arr.push(l);
    });

    arr.sort(function (a, b) {
      return b - a;
    });

    updateArr(arr);
  }, [props.display]);

  let notes = arrayNotes.map((id) => {
    return <Note key={id} id={id} newDisplay={props.newDisplay} />;
  });

  return (
    <div className="content">
      {arrayNotes.length === 0 && (
        <h1 className="appear">Notes you add appear here</h1>
      )}
      {notes}
    </div>
  );
}
