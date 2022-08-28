import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Repo from "./pages/Repo"
import Branch from "./pages/Branch"
import Commit from "./pages/Commit"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>

          <Route path="/" element={<Repo />} />
          <Route path="/Branch" element={<Branch />} />
          <Route path="/Commit" element={<Commit />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)