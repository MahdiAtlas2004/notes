import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text, notes]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch ? (
          <h2>My Notes</h2>
        ) : (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {!showSearch ? <CiSearch /> : <MdClose onClick={() => setText("")} />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && (
          <p className="empty__notes">No notes found.</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to="/create-note">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
