import { Route, Routes } from 'react-router-dom'
import { Demo } from './Demo'
import { Recoid } from './Recoil'
import { Router } from './Router'

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Demo />}>
        <Route path="recoil" element={<Recoid />} />
        <Route path="router/:id" element={<Router />} />
      </Route>
    </Routes>
  )
}
