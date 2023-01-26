import React, { useState, useEffect } from "react";
import colorPicker from "../utils/colorPicker";
import removeNote from "../utils/removeNote";
import "../styles/note.css";

export default function Note({
  id,
  obj,
  setNotes,
  displayEdit,
  setTitleState,
}) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [labelsSt, setLabels] = useState([]);
  const [color, setColor] = useState("note");

  useEffect(() => {
    let newTitle = obj.title;
    let newNote = obj.note;

    const newColor = `note ${obj.color}`;

    if (obj.title.trim() === "") newTitle = "(no title)";
    if (obj.note.trim() === "") newNote = "(no description)";

    let labelClass = "label";

    if (obj.labels.length === 1 && obj.labels[0] === "") {
      labelClass = "emptyLabel";
    }

    let i = 0;
    const labels = obj.labels.map((lbl) => {
      i++;
      return (
        <div key={i} className={labelClass}>
          {lbl}
        </div>
      );
    });
    setTitle(newTitle);
    setNote(newNote);
    setLabels(labels);
    setColor(newColor);
  }, [obj]);

  function showEdit(e) {
    if (
      e.currentTarget.classList.contains("note") &&
      !e.target.classList.contains("iconsDiv") &&
      !e.target.classList.contains("fas") &&
      !e.target.classList.contains("color-circle") &&
      !e.target.classList.contains("colorDiv")
    )
      displayEdit(true);
    setTitleState({
      id: id,
      title: obj.title,
      note: obj.note,
      labels: obj.labels.join(","),
      color: obj.color,
    });
  }

  return (
    <div className={color} data-note={id} onClick={(e) => showEdit(e)}>
      <p className="title">{title}</p>
      <p className="noteContent">{note}</p>
      <div className="labelsDiv">{labelsSt}</div>
      <div className="iconsDiv">
        <i
          className="fas fa-trash trash"
          name="5"
          onClick={() => removeNote(id, setNotes)}
        ></i>
        <i className="fas fa-palette pallete" name="4">
          <div className="colorDiv" name="4">
            <div
              className="color-circle"
              color-name="blue"
              onClick={(e) => colorPicker(e, id, setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="purple"
              onClick={(e) => colorPicker(e, id, setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="orange"
              onClick={(e) => colorPicker(e, id, setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="bordeaux"
              onClick={(e) => colorPicker(e, id, setNotes)}
            ></div>
            <div
              className="color-circle"
              color-name="green"
              onClick={(e) => colorPicker(e, id, setNotes)}
            ></div>
          </div>
        </i>
      </div>
    </div>
  );
}
