  import {RouterProvider, createBrowserRouter} from 'react-router-dom';
  import './Main/main.css';
  import Article from './Article/article';
  import Counter from './Counter';
  import ArticlesList from './Article/ArticlesList';
  import Accueil from '../pages/Accueil';
  import Blog from '../pages/Blog';
  import About from '../pages/About';
  import NavBar from './NavBar';
  

const router = createBrowserRouter(

[
  {
    path: '/',
    element: <Accueil />
  },
  {
    path: '/blog',
    element: <Blog/>
  },

  {
    path: '/about',
    element: <About/>
  }
]

)


  const Main = () =>{
    return (
  
   <>
   <NavBar />
   <RouterProvider router={router}></RouterProvider>
   </>
     
  
 
    )

  }
  export default Main