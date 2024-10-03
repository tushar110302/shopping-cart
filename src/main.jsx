import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./redux/store.js"
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
  </HashRouter>,
)
