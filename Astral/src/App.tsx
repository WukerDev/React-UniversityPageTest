import './App.scss'
import Root from './routes/root'
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';
import Home from './routes/home';
import Gallery from './routes/gallery';
import Faq from './routes/faq';
import Admin from './routes/admin';
import Login from './routes/login';
import Logout from './routes/logout';
import Planner from './routes/planner';
import Profile from './routes/profile';
import Settings from './routes/settings';


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
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/FAQ" element={<Faq />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/Planner" element={<Planner />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Settings" element={<Settings />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
