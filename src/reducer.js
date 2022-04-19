export const reducer=(state,{type,payload})=>{
    console.log(type)
    switch(type){
        case "HELLO" : 
            console.log('hello', state);
            return state;
        case "ADDED_USER" :
            console.log('au', type, payload);
            return {
                ...state,
                username: payload.username,
                token: payload.token
            };
        default : return state
    }
}