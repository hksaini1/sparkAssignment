import { ADD_LIST,REMOVE_LIST } from './action';

function Lists(state =[],action){
    switch(action.type){
        case ADD_LIST:
            return[
                ...state,
                {
                    text: action.text,
                    completed: false
                }

            ]
    }
}

const initialState={
    list:[    ],
    subid:[],
    HID:[]
};

const myReducer = (state = initialState, action)=>{
    // debugger;
    // const newState= {...state};

    console.log("state",state)
    // console.log("action",action)
    // console.log("action.text",action.text)   
    //  console.log("action",paylo)


    switch(action.type){
        case "ADD_LIST":
            return{
                ...state,                
                list:[
                    ...state.list,
                     action.text
                ],
                subid:[
                    ...state.subid,
                     action.text.subId
                ]
            } 
              case "ADD_ID":
            return{
                ...state,                
                HID:[
                    ...state.HID,
                    action.id
                ]
            }
            case "REMOVE_LIST":
                return{
                    list:[
                        // ...state.list.splice(0, action.item), ...state.list.splice(1)
                        ...state.list.filter(o=> o.subId!== action.item),
                         
                    ],
                    subid:[
                        ...state.subid.filter(num=> num!==action.item)
                    ]

                    // list:[
                    //     ...state.list,
                    //      action.text
                    // ],
                    // subid:[
                    //     ...state.subid,
                    //      action.text.subId
                    // ]
                }
    }
    return state;
};

export default myReducer;