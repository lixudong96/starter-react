import { useRoutes } from 'react-router-dom'
import { Dashboard } from '@/features/home'
import { DemoRoutes } from '@/features/demo'

export const AppRoutes = () => {
  const publicRoutes = [{ path: '/demo/*', element: <DemoRoutes /> }]

  const commonRoutes = [
    {
      path: '/',
      element: <Dashboard />,
    },
  ]

  const element = useRoutes([...publicRoutes, ...commonRoutes])

  return <>{element}</>
}
