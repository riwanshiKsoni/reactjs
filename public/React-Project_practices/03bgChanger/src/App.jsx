import { useState } from "react"



function App() {
const [color , setColor] = useState("olive")
// document.body.style.backgroundColor = color
return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}  > 
    <div className="fixed   flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex  rounded-3x1 flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 ">

    <button onClick={()=>  setColor("red") }  className="outline-none py-1 px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"red"}} >Red</button>
    <button onClick={()=> setColor("blue")}   className="outline-none py-1 px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue </button>
    <button onClick={()=> setColor("pink")}   className="outline-none py-1 px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"pink"}}> Pink</button>
    <button onClick={()=> setColor("green")}   className="outline-none py-1 px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"green"}}>Green </button>
    <button onClick={()=> setColor("purple")}   className="outline-none py-1 px-4 rounded-full shadow-lg text-white" style={{backgroundColor:"purple"}}> Purple</button>


</div>

    </div>
    </div>
  )
}


 export default App
