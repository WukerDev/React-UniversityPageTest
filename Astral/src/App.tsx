import './App.scss'
import Root from './routes/root'
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Zespol from './routes/zespol';
import Cele from './routes/cele';
import Rozwiazania from './routes/rozwiazania';


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
      <Route path="/Zespol" element={<Zespol />} />
      <Route path="/Cele" element={<Cele />} />
      <Route path="/Rozwiazania" element={<Rozwiazania />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
