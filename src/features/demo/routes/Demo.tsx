import { Link, Outlet } from 'react-router-dom'

export const Demo = () => {
  return (
    <div>
      <nav className="my-2">
        <Link className="mr-5" to="/demo/zustand">zustand</Link>
        <Link to="/demo/router/333">router</Link>
      </nav>
      <Outlet />
    </div>
  )
}
