import React from "react";
import About from "./pages/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import Product from "./pages/Product";
import RootLayout from "./Layout/RootLayout";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contect" element={<Contect />} />
        <Route path="Product" element={<Product />} />
      </Route>
    )
  );
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
