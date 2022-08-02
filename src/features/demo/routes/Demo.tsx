import { Link, Outlet } from 'react-router-dom'

export const Demo = () => {
  return (
    <div>
      <nav className="my-2">
        <Link className="mr-5" to="/demo/zustand">zustand</Link>
        <Link className="mr-5" to="/demo/router/333">router</Link>
        <Link to="/demo/react-query">react-query</Link>
      </nav>
      <Outlet />
    </div>
  )
}
