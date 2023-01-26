import { useEffect, useState } from "react";
import CreateNote from "./Component/CreateNote";
import NotesBox from "./Component/NotesBox";
import EditNote from "./Component/EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [editState, displayEdit] = useState(false);
  const [titleState, setTitleState] = useState({
    id: "",
    title: "",
    note: "",
    labels: [],
    color: "",
  });

  useEffect(() => {
    const obj = JSON.parse(window.localStorage.getItem("notes"));
    if (obj !== null) setNotes(obj);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (editState) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [editState]);

  return (
    <div className="App">
      <CreateNote setNotes={setNotes} />
      <NotesBox
        notes={notes}
        setNotes={setNotes}
        displayEdit={displayEdit}
        setTitleState={setTitleState}
      />
      <EditNote
        editState={editState}
        displayEdit={displayEdit}
        titleState={titleState}
        setTitleState={setTitleState}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
