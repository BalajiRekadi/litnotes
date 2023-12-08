import "./note.css";

function Note(props: any) {
  const { content } = props;

  return <div className="note">{content}</div>;
}

export default Note;
