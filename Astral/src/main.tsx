import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './App.scss'

import {
  createHashRouter, RouterProvider, createRoutesFromElements, Route
} from 'react-router-dom';
import Root from './routes/root'
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Zespol from './routes/zespol';
import Cele from './routes/cele';
import Rozwiazania from './routes/rozwiazania';



const router = createHashRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} >,
      <Route index element={<Home />} />,
      <Route path="/Zespol" element={<Zespol />} />,
      <Route path="/Cele" element={<Cele />} />,
      <Route path="/Rozwiazania" element={<Rozwiazania />} />,
    </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
