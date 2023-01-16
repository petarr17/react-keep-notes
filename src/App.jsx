import { useEffect, useState } from "react";
import CreateNote from "./Component/CreateNote";
import NotesBox from "./Component/NotesBox";
import EditNote from "./Component/EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [editState, displayEdit] = useState(false);

  useEffect(() => {
    const obj = JSON.parse(window.localStorage.getItem("notes"));
    if (obj === null);
    else {
      setNotes(obj);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <CreateNote setNotes={setNotes} />
      <NotesBox notes={notes} setNotes={setNotes} displayEdit={displayEdit} />
      <EditNote editState={editState} displayEdit={displayEdit} />
    </div>
  );
}

export default App;
