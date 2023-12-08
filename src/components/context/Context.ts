import React from "react";

const initialContext = {
    notes: [],
    setNotes: (notes: string[]) => undefined,
};

const NoteContext = React.createContext(initialContext);

export default NoteContext;