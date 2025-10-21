import { useDispatch, useSelector } from "react-redux"
function App() {
  const count=useSelector((state)=>state.count)
  const dispatch=useDispatch()
  

  return (
    <>
    <h1>Count: {count}</h1>
     <button onClick={()=>dispatch({type:"increment"})}>+</button>
     <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </>
  )
}

export default App
