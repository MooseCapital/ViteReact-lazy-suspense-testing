import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import {AppContext} from "./components/AppContextProvider.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";

const Photos = lazy(() => import('./components/Photos.jsx'));

function App(props) {


  return (
    <div className={`${props.colorMode} App`}>

        <nav>
            <Link to={"/"}>home</Link>
            <Link to={"/photos"}>photos</Link>
        </nav>

        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/photos"} element={
                <Suspense fallback={<div>loading...</div>}>
                    <Photos/>
                </Suspense>
            }/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default App











/*
to deploy to github pages
add this to package.json scripts

"deploy": "gh-pages -d dist"

npm install gh-pages --save-dev

npm run build

npm run deploy


To make work with github pages

  go into package.json and add
  "homepage": "/github-repo-name/#",


  go into vite.config.js and add:
     base: "/github-repo-here"

inside main.jsx -> the router component needs a basename or else it will not show up in the github page link
        <Router basename={'/react-directory-here'}>
            <App />
        </Router>



*/