import React, { useState, useRef, useEffect } from "react";
import editFunction from "../utils/editFunction";
import InputComponent from "./InputComponent";
import "../styles/edit.css";

export default function EditNote(props) {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [props.titleState.note, textAreaRef.current]);

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
            <InputComponent
              placeholder="Title"
              data="editTitle"
              name="title"
              maxLength="35"
              value={props.titleState.title}
              handleChange={handleChange}
            />
            <hr />
            <textarea
              type="text"
              placeholder="Take a note"
              data="editContent"
              autoComplete="off"
              name="note"
              value={props.titleState.note}
              ref={textAreaRef}
              onChange={handleChange}
            />
            <InputComponent
              placeholder="Labels(separate with comma)"
              data="editLabels"
              name="labels"
              maxLength="35"
              value={props.titleState.labels}
              handleChange={handleChange}
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
