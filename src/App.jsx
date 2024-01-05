import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path='projects' element={<Project/>}></Route>
        <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />;
  
}

export default App;
