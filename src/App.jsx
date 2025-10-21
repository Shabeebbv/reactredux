import { useDispatch, useSelector } from "react-redux"
import fetching from "./thunk/action"
import { useEffect } from "react"
function App() {
  const {users,loading,error}=useSelector((state)=>state)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetching())
  },[dispatch])

  return (
    <>
    {users.map((users)=>(<div>{users.name}</div>))}
    {/* <h1>Count: {count}</h1>
     <button onClick={()=>dispatch({type:"increment"})}>+</button>
     <button onClick={()=>dispatch({type:"decrement"})}>-</button> */}
    </>
  )
}

export default App
