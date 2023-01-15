import { useEffect, useState } from "react";
import CreateNote from "./Component/CreateNote";
import NotesBox from "./Component/NotesBox";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const obj = JSON.parse(window.localStorage.getItem("notes"));
    if (obj === null);
    else {
      setNotes(obj);
    }
  }, []);

  useEffect(() => {
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <CreateNote setNotes={setNotes} />
      <NotesBox notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
