import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getTodos, postTodo } from '../api'
export const Query = () => {
  const queryClient = useQueryClient()
  const query = useQuery(['todos'], getTodos)

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  return (
    <div>
      <ul>
        {query.data?.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      <button onClick={() => {
        mutation.mutate({
          name: 'Do Laundray',
          complete: false,
        })
      } }>Add Todo</button>
    </div>
  )
}
