import { useContext } from "react";
import Note from "../note/Note";
import NoteContext from "../context/Context";

function Notes(props: any) {
  console.log("Notes");
  const { notes: dummyNotes } = props;
  const { notes } = useContext(NoteContext);

  return (
    <>
      {notes.map((note: any, index: number) => (
        <Note content={note} key={index} />
      ))}
      {dummyNotes.map((note: any, index: number) => (
        <Note content={note} key={index} />
      ))}
    </>
  );
}

export default Notes;
