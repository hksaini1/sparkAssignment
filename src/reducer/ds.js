import {
    GET_INITIAL_STATE,
    CHANGE_DS_CHECKBOX
} from '../actions/actionTypes';

const initialState = {
    dsDisplay: [],
    ds : [{value:'Aasiya Jayavant',checked:false, key:0,id:0},{value:'Luvleen Lawrence',checked:false,key:1,id:0},{value:'Rey Mibourne',checked:false,key:2,id:0},{value:'Cayla Brister',checked:false,key:3,id:0}]
}
export default function auth(state = initialState, action){
    switch(action.type){
        case GET_INITIAL_STATE:{
            return {
                ...state,
            }
        }
        case CHANGE_DS_CHECKBOX: {
            state.ds.map((obj) => {
                if(obj.value === action.value){
                    obj.checked = !obj.checked;
                }
            })
            state.dsDisplay=[];
            state.ds.map((obj) => {
                if(obj.checked === true){
                    state.dsDisplay.push(obj.value);
                }
            })
            return { ...state };
        }
        default:
            return state;
    }
}