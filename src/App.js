import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home"
import { productsData } from "./api/api";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom"
import Cart from "./pages/Cart";



const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>

  )
}
const SignInLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const SignUpLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        
        <Route path="/signin" element={<SignInLayout />}>
          <Route index element={<SignIn />} />
        </Route>
        <Route path="/signup" element={<SignUpLayout />}>
          <Route index element={<SignUp />} />
        </Route>
      </Route>




    )
  )

  return (
    <div className="font font-bg">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
