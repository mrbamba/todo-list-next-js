import { Header } from "@/components/Header"
import { TodoItem } from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

function getTodos(){
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean){
  "use server"
  console.log("testsing server connection", id, complete)
  await prisma.todo.update({
    where: {
      id: id,
    },
    data:{
      complete:complete,
    }
  })
  getTodos()
}

async function deleteTodo(id: string){
  "use server"
  console.log("deleting Todo:", id)
  await prisma.todo.delete({
    where: {
      id: id,
    }
  })
  getTodos()

}

export default async function Home(){
  const todos = await  getTodos()

  return (
    <>
      <Header/>
      <ul className="pl-4">
        {todos.map(todo=>(
          <TodoItem 
          key={todo.id} 
          {...todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
)
}