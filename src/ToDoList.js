import React from "react"
import { useState } from 'react'
import "./ToDoList.css"


const ToDoList = () => {    
    const [items, setitems] = useState([])
    const [input, setInput] = useState("")

    const addHandler = () => {
        let storeditems = [...items]
        storeditems.push(input)
        setitems(storeditems) 
        
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let storeditems = [...items]
            storeditems.push(input)
            setitems(storeditems)
        }}

    const removeHandler = (index) => {
        let storeditems = [...items]
        storeditems.splice(index,1)
        setitems(storeditems)
    }
    const clear=()=>{
        setitems([])              
    };
    
    return (
        <div>
            <h1>To Do List</h1>
            <header className="inputAndClear">                      
                <input type="text" id="input"  placeholder="<click> or press <enter> to submit"
                onChange={(event) => setInput(event.target.value)}
                onClick={addHandler}
                onKeyDown={handleKeyDown}         
                />
                <div><button onClick={clear} className="removeAllButton">delete all</button></div>
            </header>

            {items.map((item, index) => { 
                return (
                <div key={index} className="listAndButton">
                    <form className="list1"><ul>
                <li className="items">{item}</li></ul></form>
                 <button className="removeButton"onClick={() => removeHandler(index,1)}>delete</button>
                </div>
                  )
                })}     

                
        </div>        
    )     
    }
export default ToDoList
