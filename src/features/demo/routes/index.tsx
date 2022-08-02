import { Route, Routes } from 'react-router-dom'
import { Demo } from './Demo'
import { Zustand } from './Zustand'
import { Router } from './Router'

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Demo />}>
        <Route path="zustand" element={<Zustand />} />
        <Route path="router/:id" element={<Router />} />
      </Route>
    </Routes>
  )
}
