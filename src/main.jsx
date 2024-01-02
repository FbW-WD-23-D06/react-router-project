import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import StaticRouter from 'react-router-dom/server.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Hash Router wird für sharing host benutzt */}
    {/* <HashRouter> */}
    {/* Memory Router wird mit testing benutzt */}
    {/* <MemoryRouter> */}
    {/* Static router: server side rendering */}
    {/* <StaticRouter> */}
    <App />
    {/* </StaticRouter> */}
    {/* </MemoryRouter> */}
    {/* </HashRouter> */}

    </BrowserRouter>
  </React.StrictMode>,
)
