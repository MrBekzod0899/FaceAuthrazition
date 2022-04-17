export const reducer=(state,payload)=>{
    switch(payload.type){
        case 'ADDED_USER' :
            return {
                ...state,
                user:payload
            }
        default : return state
    }
}