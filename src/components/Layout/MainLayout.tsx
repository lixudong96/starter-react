import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
interface SideNavigationItem {
  name: string
  to: string
}

const SideNavigation = () => {
  const navigation: SideNavigationItem[] = [
    { name: 'Home', to: '.' },
    { name: 'Demo', to: './demo' },
  ]

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className={({ isActive }) => clsx(`text-gray-500 hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 
          text-base font-medium rounded-md`, isActive ? 'bg-gray-900 text-white' : '')}
        >
          {item.name}
        </NavLink>
      ))}
    </>
  )
}

interface MainLayoutProps {
  children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="w-screen flex items-center">
        <SideNavigation />
      </div>
      <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
    </div>
  )
}
