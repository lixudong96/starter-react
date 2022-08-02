import { useRoutes } from 'react-router-dom'
import { DemoRoutes } from '@/features/demo'

export const AppRoutes = () => {
  const commonRoutes = [{ path: '*', element: <DemoRoutes /> }]

  const element = useRoutes([...commonRoutes])

  return <>{element}</>
}
