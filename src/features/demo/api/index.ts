import { nanoid } from 'nanoid'
import { sleep } from '@/lib/sleep'

interface TodoItem {
  id: string
  name: string
  complete: boolean
}
const todos: TodoItem[] = []

export const getTodos = async () => {
  await sleep(1)
  return todos
}

export const postTodo = async (todo: Omit<TodoItem, 'id'>) => {
  await sleep(1)
  const item = {
    id: nanoid(),
    ...todo,
  }
  todos.push(item)
  return item
}
