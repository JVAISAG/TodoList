

export default function Form({handleSubmit,inputRef}){
   return (
        <form className="form_container" onSubmit={handleSubmit}>
            <label htmlFor="addTask">
                <input type="text" className="addTask" name="addTask" ref={inputRef} />
                
            </label>
            <button>
              <span className="visually-hidden">Add Task</span>
              <svg>
                <path d="./"/>
                </svg>  
            </button>
        </form>
    )

    
}
