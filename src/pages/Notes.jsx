import { CiSearch } from "react-icons/ci";

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        <input type="text" autoFocus placeholder="Keyword..." />
        <button className="btn">
          <CiSearch />
        </button>
      </header>
    </section>
  );
};

export default Notes;
