import React, { useRef, useState } from "react";
import sendToLocal from "../utils/sendToLocal";
import { Open, Close } from "../utils/noteOpenClose";

export default function CreateNote(props) {
  const title = useRef(null);
  const note = useRef(null);
  const labels = useRef(null);

  const [isActive, setIsActive] = useState(false);

  function passNotes(e) {
    e.preventDefault();

    sendToLocal(
      title.current.value,
      note.current.value,
      labels.current.value,
      title.current,
      note.current,
      labels.current,
      props.setNotes
    );

    // props.updateChanged((prev) => prev + 1);
  }

  return (
    <div className="header">
      <h1>React Keep Notes</h1>
      <form className="input-form">
        <input
          type="text"
          ref={title}
          placeholder="Title..."
          className={isActive ? "note-inputs" : "closed"}
        />
        <input
          type="text"
          ref={note}
          onFocus={() => Open(setIsActive)}
          className="note-inputs"
          placeholder="Take a note..."
        />
        <input
          type="text"
          ref={labels}
          className={isActive ? "note-inputs" : "closed"}
          placeholder="Labels (separate with comma)"
        />
        <div className={isActive ? "buttons-div" : "closed"}>
          <input
            type="submit"
            className="submit-btn"
            onClick={passNotes}
            value="Submit"
          />
          <button
            className="close-btn"
            onClick={(e) => {
              e.preventDefault();
              Close(setIsActive);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
