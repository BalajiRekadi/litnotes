import "./App.css";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/ToolBar";
import Notes from "./components/notes/Notes";

function App() {
  console.log("App");
  return (
    <>
      <Header />
      <Toolbar />
      <Notes />
    </>
  );
}

export default App;
