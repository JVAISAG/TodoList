
export default function TodoHero({tasksCompleted,totalTasks}){
   
return(
    <section>
        <div>
        <h2>Tasks Done</h2>
        <h3>Keep It Up</h3>
        </div>
        <div>
            {tasksCompleted}/{totalTasks}
        </div>

    </section>
)
}