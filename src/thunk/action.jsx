 function fetching(){
    return async (dispatch)=>{
        dispatch({type:"fetchUserRequest"})

        try{
            const data= await fetch ("https://jsonplaceholder.typicode.com/users")
            const res=await data.json()
            dispatch({type:"fetchUserSuccesfull",payload:res})
            
        }

        catch(err){
            dispatch({type:"fetchUserFail",payload:err})
        }
    }
}
export default fetching