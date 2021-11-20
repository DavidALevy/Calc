/* import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
import React from "react"
import { useState } from 'react'

// const App =()=>{
//   return (
//     <div>
//     <h1>Welcome to my site!</h1>
//     <h2>made by David</h2>
//     <Person/><Person/><Person/>
//     </div>
//   )
// }
// const Person=()=>{
//   return(<div><p>my name is David</p>
//   <h3>Hi!</h3>
//   <Job/>
//   </div>)}
// export default App

// const Job =()=>{
//   return<p>Hello Job</p>
// }
import "./App.css"
// class App extends React.Component{
//   render(){
//     return(
//       <div className="container">
//         <h1 id="title">I'm a class component</h1>
//         {/* <Person name="Dan"age="34"/>
//         <Person name="Stuart" age="30"/>
//         <Person name="Ben"age="21"/> */}
//       </div>
//     )
//   }
// }
// const Person=(props)=>{
//   return(
//     <p>Hi I'm {props.name} and I'm {props.age}</p>
//   );
// };
// export default App

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Job job="chef"/>
//         <Job job="junior developer"/>
//       </div>
//     )
//   }
// }
// const Job=(insert)=>{
//   return(
//     <p>I'm a {insert.job}</p>
//   )
// }
// export default App

// const App =()=>{
  
//     return(
//       <div>
//         <Person name="Leon" petsName="Bob"/>
//       </div>
//     )
//   }
// const Person=(props)=>{
//   return(
//     <div><h2>my name is {props.name}</h2>
//   <Pet petsName={props.petsName}/>
//   </div>
//   )
// }
// const Pet =(props)=>{
//   return <p>My name is {props.petsName}</p>
// }
// export default App
//  import Foto1 from "./images/pic1.jpg";
//  import Foto2 from "./images/pic2.jpg";
//  import Foto3 from "./images/pic3.jpg";
//  import Foto4 from "./images/pic4.jpg";
// class App extends React.Component{
//     render(){
//       return(
//         <div class="container">
//           <div class="box"><Article caption="bla blafffffffffff"  alt="sport1" src= {Foto1} /></div>
//           <div class="box"><Article caption="bla bla bladddddd" alt="sport2" src= {Foto2}/></div>
//           <div class="box"><Article caption="bla blayyyyyyyyyy" alt="sport3" src= {Foto3}/></div>
//           <div class="box"><Article caption="bla bla bffffffff" alt="sport4" src= {Foto4}/></div>
//         </div>
//       )
//     }
//   }
//   const Article=(props)=>{
//     return(<div>
//         <img src={props.src} alt="sport" /> 
//       <p>{props.caption}</p>
//       </div>
//     )
//   }
  
//   export default App
// import { useState } from "react"
// const App=()=>{
//   const [count,setCount]=useState(0)
//   return(<div>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>click</button>
//     <h3>made by David</h3>
//     <Tunes artist ="eiffel 65" songName="blue"/>
//     </div>
//   )
// }
// const Tunes=(props)=>{
//   return(<div>
//     <p>{props.artist}</p>
//     <p>{props.songName}</p >
//     </div>
//   )
// }
// export default App
// const App=()=>{
//   const [persons,setPersons]=useState([
//     {firstName:"Leon"},{firstName:"Jordan"}])
//   return(<div>
//     <Person name={persons[0].firstName}/>
//     <Person name={persons[1].firstName}/>

//     </div>
//   )
// }
// const Person=(props)=>{
//   return(<div>
//     <p>Hi {props.name}</p>
    
//     </div>
//   )
// }
// export default App


// const App = () => {
//   const [persons, setPersons] = useState([
//     {firstName: "leon"}, 
//     {firstName: "jordan"},
// //     {firstName: "ben"},
// //     {firstName: "dan"},
// //     {firstName: "myles"},
// //     {firstName: "andy"},
// //     {firstName: "neil"},
// //     {firstName: "laura"},
// //     {firstName: "liam"},
// //     {firstName: "jill"},
// //     {firstName: "john"},
//   ])

// //   return (
// //     <div>
// //     < Person for (let i=0;o<10;i++) name={persons[i].firstName} />
      
// //     </div>
// //   )
// // }
// const greeting =()=>{
//   alert("hello there")
// }
// return(
//   <div>
//     <Person name={persons[0].firstName}
    
//     func={greeting}/>
//   </div>
// )}


// const Person = (props) => {
//   return <div><h2>hello there {props.name}</h2>
//    <button onClick={()=>props.func(props.name)}>greeting</button> 
//    </div>
// }
// export default App
// 
// const App=()=>{
//   const [nums,setNums]=useState([1,2,3,4])
//   const addHandler=()=>{
//     let storedNums=[...nums]
//     storedNums.push(storedNums[storedNums.length-1]+1)
//     setNums(storedNums)
//   }
// return(
//   <div>
//     <h1>welcome to my nums</h1>
//     {nums.map((num,index)=>{
//       return<h2 key={index}>{num}</h2>
//     })}
//     <button onClick={addHandler}>add one</button>
//   </div>
// )


// }
// export default App
// const App =()=>{
//   const [nums,setNums]=useState([1,2,3,4,5])
// const removeHandler =(index)=>{
//   let storedNums=[...nums]  
// storedNums.splice(index,1);
// setNums(storedNums)}

// return(
//   <div>
//     <h1>welcome to nums</h1>
//     {nums.map((num,index)=>
//     {
//       return(
//         <div>
//           <h2>{num}</h2>
//           <button onClick={()=>removeHandler}>remove</button>
//         </div>
//       )
//     })}
//   </div>
// )
//   }
const App=()=>{
  const[input,setInput]=useState("hello")
  const[favMovie,setfavMovie]=useState("")
  const changeHandler=(event)=>{
    setInput(event.target.value)}
return(
  <div>
    <h1>welcome</h1>
    <h2>info about you </h2>
    <p></p>
    <input type="text" onChange={changeHandler}/>
    <p>{input}</p>
  </div>
)

}









export default App