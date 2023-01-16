import React, { useState } from "react";
import editFunction from "../utils/editFunction";
import "../styles/edit.css";

export default function EditNote(props) {
  function handleChange(e) {
    const { name, value } = e.target;
    props.setTitleState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {props.editState && (
        <div data="modal">
          <form
            data="editDiv"
            onSubmit={(e) =>
              editFunction(
                e,
                props.titleState,
                props.setNotes,
                props.displayEdit
              )
            }
          >
            <p data="closeModal" onClick={() => props.displayEdit(false)}>
              X
            </p>
            <input
              type="text"
              placeholder="Title"
              data="editTitle"
              name="title"
              value={props.titleState.title}
              onChange={handleChange}
            />{" "}
            <hr />
            <input
              type="text"
              placeholder="Take a note"
              data="editContent"
              name="note"
              value={props.titleState.note}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Labels(separate with comma)"
              data="editLabels"
              name="labels"
              value={props.titleState.labels}
              onChange={handleChange}
            />
            <div data="submitDiv">
              <button type="submit" data="submit">
                Submit
              </button>
            </div>
          </form>
          <div data="overlay" onClick={() => props.displayEdit(false)}></div>
        </div>
      )}
    </div>
  );
}
