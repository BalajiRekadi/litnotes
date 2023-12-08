import "./App.css";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/ToolBar";
import Notes from "./components/notes/Notes";
import CreateModal from "./components/create-modal/CreateModal";
import { useState } from "react";
import NoteContext from "./components/context/Context";

function App() {
  console.log("App");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notes, setNotes] = useState<string[]>(["Hello world"]);

  const contextValue: any = {
    notes,
    setNotes,
  };
  return (
    <>
      <Header />
      <Toolbar setShowCreateModal={setShowCreateModal} />
      <NoteContext.Provider value={contextValue}>
        <Notes notes={notes} />
        <CreateModal
          showCreateModal={showCreateModal}
          setShowCreateModal={setShowCreateModal}
        />
      </NoteContext.Provider>
    </>
  );
}

export default App;
