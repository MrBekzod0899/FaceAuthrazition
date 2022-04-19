export const reducer=(state,{type,payload})=>{
    console.log(payload)
    switch(type){
        case 'ADDED_USER' :
            return {
                ...state,
                user:payload
            }
        default : return state
    }
}