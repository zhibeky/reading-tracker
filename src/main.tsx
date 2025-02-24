import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { ClerkProvider } from '@clerk/clerk-react';

import './index.css';
import {App} from './App.tsx';
import {AddBooksPage} from "./components/pages/AddBooksPage.tsx";
import {RootLayout} from "./components/pages/RootLayout.tsx";
import {BookTrackerPage} from "./components/pages/BookTrackerPage.tsx";
import {EditBookPage} from "./components/pages/EditBookPage.tsx";
import {StatsPage} from "./components/pages/StatsPage.tsx";
import {AboutPage} from "./components/pages/AboutPage.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<RootLayout />}>
                      <Route index element={<App />} />
                      <Route path="add-book" element={<AddBooksPage/>} />
                      <Route path="book-tracker" element={<BookTrackerPage />}/>
                      <Route path="edit-book/:index" element={<EditBookPage />}/>
                      <Route path="stats" element={<StatsPage />}/>
                      <Route path="about" element={<AboutPage />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </ClerkProvider>
  </StrictMode>,
)
