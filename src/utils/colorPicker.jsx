import React from "react";

export default function colorPicker(e) {
  e.preventDefault();
  let id = e.target.closest(".note").getAttribute("data-note");
  let colorName = e.target.getAttribute("color-name");
  // colorPicker(id, colorName);
  console.log(id, colorName);
}
