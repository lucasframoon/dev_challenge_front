import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Repo from "./pages/Repo"
import Branch from "./pages/Branch"
import Commit from "./pages/Commit"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>

        <Route path="/" element={<Repo />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/commit" element={<Commit />} />

      </Route>
    </Routes>
  </BrowserRouter>
)
