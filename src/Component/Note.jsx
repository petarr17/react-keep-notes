import React from "react";
import colorPicker from "../utils/colorPicker";
import removeNote from "../utils/removeNote";
import "../styles/note.css";

export default function Note(props) {
  let obj = props.obj;

  const color = `note ${props.obj.color}`;

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

  function showEdit(e) {
    if (
      e.currentTarget.classList.contains("note") &&
      !e.target.classList.contains("iconsDiv") &&
      !e.target.classList.contains("fas") &&
      !e.target.classList.contains("color-circle") &&
      !e.target.classList.contains("colorDiv")
    )
      props.displayEdit(true);
    props.setTitleState({
      id: props.id,
      title: obj.title,
      note: obj.note,
      labels: obj.labels.join(","),
      color: obj.color,
    });
  }

  return (
    <div className={color} data-note={props.id} onClick={(e) => showEdit(e)}>
      <p className="title">{obj.title}</p>
      <p className="noteContent">{obj.note}</p>
      <div className="labelsDiv">{labels}</div>
      <div className="iconsDiv">
        <i
          className="fas fa-trash trash"
          name="5"
          onClick={() => removeNote(props.id, props.setNotes)}
        ></i>
        <i className="fas fa-palette pallete" name="4">
          <div className="colorDiv" name="4">
            <div
              className="color-circle"
              color-name="blue"
              onClick={(e) => colorPicker(e, props.id, props.setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="purple"
              onClick={(e) => colorPicker(e, props.id, props.setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="orange"
              onClick={(e) => colorPicker(e, props.id, props.setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="bordeaux"
              onClick={(e) => colorPicker(e, props.id, props.setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="green"
              onClick={(e) => colorPicker(e, props.id, props.setNotes)}
            ></div>
          </div>
        </i>
      </div>
    </div>
  );
}
