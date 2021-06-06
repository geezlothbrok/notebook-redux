import NoteList from "../componet/NoteList";

export function addNewNotes (notes) {
    return {
        type: 'ADD_NOTES',
        payload: notes,
    }
}

export  function editNote (id, upadtedNote) {
    return {
        type: 'EDIT_NOTE',
        payload: { id: id, upadtedNoteInfo: upadtedNote },
    }
}

export function deleteNote (id) {
    return {
        type: 'DELETE_NOTE',
        payload: id,
    }
}