import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Contact from "../pages/Contact/contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }
      ]
    },
  ]);