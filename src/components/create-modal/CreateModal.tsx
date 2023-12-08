import ReactDOM from "react-dom";
import "./create-modal.css";
import { useContext } from "react";
import NoteContext from "../context/Context";

function CreateModal(props: any) {
  console.log("Modal");
  const { showCreateModal, setShowCreateModal } = props;
  const { setNotes } = useContext(NoteContext);

  return ReactDOM.createPortal(
    showCreateModal && (
      <div className="form">
        <textarea></textarea>
        <button
          onClick={() => {
            setShowCreateModal(false);
            setNotes(["Ayyayo"]);
          }}
        >
          Save
        </button>
      </div>
    ),
    document.getElementById("modal")!
  );
}

export default CreateModal;
