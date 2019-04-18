import {combineReducers} from 'redux';

const noteReducer =(allNotes=[],action) => {
    if(action.type==='CREATE_CONTENT'){
        return action.payload
    } return allNotes
};

const addReducer =(note=0,action) => {
    if(action.type==='ADD_NOTE'){
        return note+action.payload
    } return note;
}

const saveReducer =(allNotes=[{title: "Note List", content: "" }],action) => {
    if(action.type==='SAVE_CONTENT'){
        return [...allNotes,action.payload]
    } return allNotes
}

export default combineReducers({
    noteReducer: noteReducer,
    addReducer : addReducer,
    saveReducer: saveReducer
});