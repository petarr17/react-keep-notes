import { useEffect, useState } from "react";
import CreateNote from "./Component/CreateNote";
import NotesBox from "./Component/NotesBox";

function App() {
  const [display, newDisplay] = useState(0);

  return (
    <div className="App">
      <CreateNote newDisplay={newDisplay} />
      <NotesBox display={display} newDisplay={newDisplay} />
    </div>
  );
}

export default App;
