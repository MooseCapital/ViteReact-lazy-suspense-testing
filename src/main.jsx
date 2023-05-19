import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, HashRouter} from "react-router-dom"
import {AppContextProvider} from "./components/AppContextProvider.jsx";
// basename={"/ViteReact-lazy-suspense-testing"}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppContextProvider>
  <HashRouter>
        <App colorMode={"light-mode"} basename={"/ViteReact-lazy-suspense-testing"} />

  </HashRouter>
  </AppContextProvider>
  </React.StrictMode>,
)
