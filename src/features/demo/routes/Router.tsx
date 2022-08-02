import { useParams } from 'react-router-dom'

export const Router = () => {
  const { id } = useParams()
  return <h1>RouterPage id: {id}</h1>
}
