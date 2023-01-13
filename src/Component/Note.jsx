import React from "react";
import colorPicker from "../utils/colorPicker";
import removeNote from "../utils/removeNote";
import "../styles/note.css";

export default function Note(props) {
  let obj = JSON.parse(localStorage.getItem(props.id));

  if (obj.title.trim() === "") obj.title = "(no title)";
  if (obj.note.trim() === "") obj.note = "(no description)";

  let labelClass = "label";

  if (obj.labels.length === 1 && obj.labels[0] === "") {
    labelClass = "emptyLabel";
  }

  const labels = obj.labels.map((lbl) => {
    return (
      <div key={lbl} className={labelClass}>
        {lbl}
      </div>
    );
  });

  return (
    <div className="note" data-note={props.id}>
      <p className="title">{obj.title}</p>
      <p className="noteContent">{obj.note}</p>
      <div className="labelsDiv">{labels}</div>
      <div className="iconsDiv">
        <i
          className="fas fa-trash trash"
          name="5"
          onClick={(event) => removeNote(event, props.newDisplay)}
        ></i>
        <i className="fas fa-palette pallete" name="4">
          <div className="colorDiv" name="4">
            <div
              className="color-circle"
              color-name="white"
              onClick={colorPicker}
            ></div>
            <div
              className="color-circle"
              color-name="purple"
              onClick={colorPicker}
            ></div>
            <div
              className="color-circle"
              color-name="orange"
              onClick={colorPicker}
            ></div>
            <div
              className="color-circle"
              color-name="teal"
              onClick={colorPicker}
            ></div>
            <div
              className="color-circle"
              color-name="green"
              onClick={colorPicker}
            ></div>
          </div>
        </i>
      </div>
    </div>
  );
}
