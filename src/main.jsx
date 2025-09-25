import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import BookQuote from './BookQuote'
import './Styles/globals.css'
const REPO_NAME = '/book-quote';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={REPO_NAME}>
     <BookQuote />
    </BrowserRouter>
  </StrictMode>,
)
