
const initialState={
    users:[]
    ,loading: false,
    error:null
}
function reducer(state=initialState,action){
    switch(action.type){
        case "fetchUserRequest":
            return{...state,loading:true,error:null}
        case "fetchUserSuccesfull":
            return{...state,loading:false,users:action.payload}
             case "fetchUserFail":
            return{...state,loading:false,error:action.payload}
            default:return state
    }

}
export default reducer