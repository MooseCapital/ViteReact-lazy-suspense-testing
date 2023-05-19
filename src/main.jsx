import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import {AppContextProvider} from "./components/AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppContextProvider>
    <Router basename={"/ViteReact-lazy-suspense-testing"}>
        <App colorMode={"light-mode"} />
    </Router>
  </AppContextProvider>
  </React.StrictMode>,
)
