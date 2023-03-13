import './App.scss'

import Root from './routes/root'
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';
import Home from './routes/home';

//NAVBAR
import NavBar from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

//REACT-ROUTER
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

  //TODO: Dodanie funkcji zmiany motywu do przycisku
  //https://tailwind-elements.com/docs/standard/getting-started/dark-mode/


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>,
      <Route index element={<Home />} />,
      <Route path="/Kontakt" element={<Contact />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
