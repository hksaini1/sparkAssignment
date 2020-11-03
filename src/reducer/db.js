import {
    GET_INITIAL_STATE,
    CHANGE_DB_CHECKBOX
} from '../actions/actionTypes';

const initialState = {
    dbDisplay: [],
    db: [{value:'Aaron Almaraz',checked:false,key:0,id:2},{value:'Jelena Denisova',checked:false,key:1,id:2}]
}

export default function auth(state = initialState, action){
    switch(action.type){
        case GET_INITIAL_STATE:{
            return {
                ...state,
            }
        }
        case CHANGE_DB_CHECKBOX: {
            state.db.map((obj) => {
                if(obj.value == action.value){
                    obj.checked = !obj.checked;
                }
            })
            state.dbDisplay=[];
            state.db.map((obj) => {
                if(obj.checked === true){
                    state.dbDisplay.push(obj.value);
                }
            })
            return { ...state };
        }
        default:
            return state;
    }
}