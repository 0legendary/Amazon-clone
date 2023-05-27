import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom"


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
        </Route>
        
      
    )
  )

  return (
    <div className="font">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
