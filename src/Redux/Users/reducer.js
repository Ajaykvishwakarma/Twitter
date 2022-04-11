import { USER_DETAILS } from "./action";

const initState = {
    user:""
}

export const userReducer = (store = initState,{type,payload}) =>{
    
    switch(type)
    {
        case USER_DETAILS:
            return {...store,user:payload};
        default:
            return store;
    }
}