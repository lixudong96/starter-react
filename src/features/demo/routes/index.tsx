import { Route, Routes } from 'react-router-dom'
import { Demo } from './Demo'
import { Zustand } from './Zustand'
import { Router } from './Router'
import { Query } from './Query'

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Demo />}>
        <Route path="zustand" element={<Zustand />} />
        <Route path="router/:id" element={<Router />} />
        <Route path="react-query" element={<Query />} />
      </Route>
    </Routes>
  )
}
