import * as React from 'react'
import { Button } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import { Spinner } from '@/components/Element'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense
    fallback={
      <div className="flex items-center justify-center w-screen h-screen">
        <Spinner size="xl" />
      </div>
      }
    >
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecoilRoot>
        <Router>
          {children}
        </Router>
      </RecoilRoot>
    </ErrorBoundary>
  </React.Suspense>
)
