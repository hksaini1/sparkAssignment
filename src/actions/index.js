import {
    GET_INITIAL_STATE,
    CHANGE_DS_CHECKBOX,
    CHANGE_DB_CHECKBOX,
    CHANGE_WEB_CHECKBOX
} from './actionTypes';


export function fetchList(){
    return {
        type: GET_INITIAL_STATE
    }
}

export function changeDsCheckbox(value){
    return {
        type: CHANGE_DS_CHECKBOX,
        value
    }
}

export function changeDbCheckbox(value){
    return {
        type: CHANGE_DB_CHECKBOX,
        value
    }
}

export function changeWebCheckbox(value){
    return {
        type: CHANGE_WEB_CHECKBOX,
        value
    }
}