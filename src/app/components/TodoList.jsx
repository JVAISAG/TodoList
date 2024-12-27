

export default function TodoList({tasks,handleDelete,handleComplete,liRef}){


return(
    <ul id="Todolist">
       {tasks && tasks.length>0 ? 
       tasks.map(
        (task,index)=>{
           return <li key={task.id || index} ref={(el)=>{
            liRef.current[index] = el
           }}>{task.title} 
           <div>
            <button className="completed" onClick={
                ()=>{
                    handleComplete(index,task.id)
                }
            }>
                <span>&#x2713;</span>
            </button>
            <button className="deleted" onClick={()=>{
                handleDelete(task.id)
            }}>
                <span className="glyphicon glyphicon-trash"></span>
            </button>
            </div></li>
        }
       ):<p>No Task Pending!</p>
    }
    </ul>
)
}
