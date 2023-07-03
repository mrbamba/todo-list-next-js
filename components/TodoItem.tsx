"use client"
type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo:(id:string, complete:boolean)=>void
    deleteTodo:(id:string)=>void
}

export function TodoItem({id, title, complete, toggleTodo, deleteTodo}:TodoItemProps){
    return <li className="flex flex-1 items-center">
        <input 
        id={id} 
        type="checkbox" 
        className="cursor-pointer peer flex-initial mr-4" 
        defaultChecked={complete} 
        onChange={e=>toggleTodo(id,e.target.checked)}/>
        <label htmlFor={id} 
        className="cursor-pointer peer-checked:line-through 
        peer-checked:text-slate-500 flex-1">
            {title}
        </label>
        <button onClick={()=>deleteTodo(id)} 
        className="flex-initial text-red-600 hover:text-red-600/75">
            Delete
        </button>
    </li>
}