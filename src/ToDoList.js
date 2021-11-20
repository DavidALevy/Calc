import React from "react"
import { useState } from 'react'


const ToDoList = () => {    
    const [items, setitems] = useState([])
    const [input, setInput] = useState("")

    const addHandler = () => {
        let storeditems = [...items]
        storeditems.push(input)
        setitems(storeditems)
    }

    const removeHandler = (index) => {
        let storeditems = [...items]
        storeditems.splice(index,1)
        setitems(storeditems)
    }
    // const removeAllHandler = (index) => {
    //     let storeditems = [...items]
    //     storeditems.splice(index,(items.length))
    //     setitems(storeditems)
    // }

    return (
        <div>
            <h1>To Do List</h1>

            <input type="text" onChange={(event) => setInput(event.target.value)}/>

            <button onClick={addHandler}>type on the left and hit this button to add to your list</button>

            {items.map((item, index) => {
                return (
                <div key={index}>
                <h2>{item}</h2>
                 <button onClick={() => removeHandler(index,1)}>remove</button>
                </div>
                  )
                })}     

                {/* {items.map((item, index) => {
                return (
                <div key={index}>                
                 <button onClick={() => removeAllHandler(index,(items.length))}>remove all</button>
                </div>
                  )
                })}                         */}
        </div>        
    )     
    }
export default ToDoList
