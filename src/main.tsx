import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import {AddBooksPage} from "./components/pages/AddBooksPage.tsx";
import {RootLayout} from "./components/pages/RootLayout.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RootLayout />}>
                  <Route index element={<App />} />
                  <Route path="add-book" element={<AddBooksPage/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
