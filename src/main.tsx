import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.less'
import 'uno.css'
import '@unocss/reset/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <App />,
)
