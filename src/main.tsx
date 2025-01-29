import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from "react-router";
import {AddBooksPage} from "./components/pages/AddBooksPage.tsx";
import {RootLayout} from "./components/pages/RootLayout.tsx";
import {BookTrackerPage} from "./components/pages/BookTrackerPage.tsx";
import {EditBookPage} from "./components/pages/EditBookPage.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <BrowserRouter basename="/reading-tracker">
              <Routes>
                  <Route path="/" element={<RootLayout />}>
                      <Route index element={<App />} />
                      <Route path="add-book" element={<AddBooksPage/>} />
                      <Route path="book-tracker" element={<BookTrackerPage />}/>
                      <Route path="edit-book/:index" element={<EditBookPage />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </ClerkProvider>
  </StrictMode>,
)
