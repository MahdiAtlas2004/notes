import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    try {
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Failed to parse notes from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
