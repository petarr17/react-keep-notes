import React, { useState } from "react";
import "../styles/edit.css";

export default function EditNote(props) {
  console.log(props.editState);

  const [naslov, changeNaslov] = useState(props.editState);

  return (
    <div>
      {props.editState && (
        <div data="modal">
          <form data="editDiv">
            <p data="closeModal" onClick={() => props.displayEdit(false)}>
              X
            </p>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={naslov}
              onChange={(e) => changeNaslov(e.target.value)}
            />
          </form>
          <div data="overlay"></div>
        </div>
      )}
    </div>
  );
}
