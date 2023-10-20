import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Counter from "./components/Counter";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import About from './pages/About';
import TodoList from "./pages/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/TodoList/TodoActions';

const router = createBrowserRouter(

  [
    {
      path: '/',
      element: <Accueil/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
  
    {
      path: '/about',
      element: <About/>
    },

    {
      path: '/todolist',
      element : <TodoList/>
    },
  ]
)
  

function App() {
  return (
    <>
  <RouterProvider router={router}/>
    </>
  );
}


export default App;
