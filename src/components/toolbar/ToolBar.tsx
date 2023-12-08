import "./toolbar.css";

function ToolBar(props: any) {
  console.log("ToolBar");
  const { setShowCreateModal } = props;

  return (
    <div className="toolbar">
      <button onClick={() => setShowCreateModal(true)}>Add Note</button>
    </div>
  );
}

export default ToolBar;
