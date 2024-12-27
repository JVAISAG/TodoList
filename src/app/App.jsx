"use client"

import "./styles.css"
import { useRef, useState,useEffect } from "react";
import Form from "@/app/components/Form.jsx"
import Header from "@/app/components/Header.jsx"
import TodoHero from "@/app/components/TodoHero.jsx"
import TodoList from "@/app/components/TodoList.jsx"




export default function App(){
 
  const [tasksDone,setTasksDone] = useState(0)
  const [tasks,setTasks] = useState(
    ()=>{
       return JSON.parse(window.localStorage.getItem("tasks")) || 
      [{
        title : "",
        id: ""
      }]
    }
    
    )
  const inputRef = useRef(null)
  const liRef = useRef([])

  useEffect(
    ()=>{
      window.localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks]
  )






const hanldeSubmit = async (e)=>{
    if(inputRef.current.value.length === 0){
      alert("Add a task description")
      return
    }  
    e.preventDefault()
   
    setTasks(
      (prevState)=>([
        ...prevState,
        {
         title : inputRef.current.value,
          id : crypto.randomUUID(),
          completed : false
        }
      ])
    )
  
    
  }
 function handleDelete(taskId){
  setTasks((prevTasks)=>{
    return prevTasks.filter(
      (task)=>{
       return ( taskId!==task.id)
      }
    )
  })


 }
 
 function handleComplete(index){
  tasks[index].completed = true
  liRef.current[index].style.textDecoration = "line-through"
  setTasksDone((count)=>count+1)
 }
 const validTasks = tasks.filter((task)=>task.title.trim().length>0)

return(
  <section className="container">

    <Header/>
    <TodoHero tasksCompleted={tasksDone} totalTasks={validTasks.length}/>
    <Form handleSubmit={hanldeSubmit} inputRef={inputRef}/>
    <TodoList tasks={validTasks} handleDelete={handleDelete} handleComplete={handleComplete} liRef={liRef}/>
  </section>
)
}

