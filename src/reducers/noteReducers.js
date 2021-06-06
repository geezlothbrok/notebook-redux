const initialState = {
    notes: []
};

const noteReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTES":
           return { ...state,notes: [...state.notes, action.payload]};
            
        case 'EDIT_NOTES' :
            var id = action.payload.id;
            let updatedNotesInfo = action.payload.upadtedNotesInfo
            let NotesAfterUpdate = state.notes.map((notes) => {
                if (notes.id === id) {
                  return updatedNotesInfo;
                }
                return notes;
              });
                return { notes: NotesAfterUpdate };  

        case 'DELETE_NOTES' :
            var id = action.payload;
            let NotesAfterDelete=state.notes.filter((notes) => notes.id !==id);
            return { notes: NotesAfterDelete };

    
        default:
            return state;
    }

};


export default noteReducers;