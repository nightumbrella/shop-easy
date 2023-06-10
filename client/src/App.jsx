import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import Top from "./components/Top";
import {} from "react";
import MenuCategory from "./components/MenuCategory";

const Layout = () => {
  return (
    <div className="relative">
      <Top />
      <MenuCategory />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:category",
          element: <Products />,
        },
        {
          path: "/productsDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "category/:id",
          element: <Category />,
        },
      ],
    },
  ]);
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
};

export default App;
