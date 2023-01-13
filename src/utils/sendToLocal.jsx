import React from "react";

export default function sendToLocal(
  title,
  note,
  labels,
  titleEl,
  noteEl,
  labelsEl,
  newDisplay
) {
  if (title === "" && note === "") alert("Fill out title or note form!");
  else {
    titleEl.value = "";
    noteEl.value = "";
    labelsEl.value = "";

    labels = labels.split(",");
    for (let i = 0; i < labels.length; i++) labels[i] = labels[i].trim();

    let data = {
      title: title,
      note: note,
      labels: labels,
      color: "white",
    };

    let localkeys = Object.keys(localStorage);

    const arr = localkeys.map((key) => +key);

    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    let valid = false;
    let id;

    if (title.trim() === "") title = "(no title)";
    if (note.trim() === "") note = "(no description)";

    if (arr.length === 0) {
      id = 0;
    } else {
      id = max + 1;
    }
    data.id = id;
    localStorage.setItem(id, JSON.stringify(data));

    newDisplay((prev) => prev + 1);
  }
}
