import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Products from "./pages/Products";
import PCategory from "./pages/PCategory";

const Layout = () => {
  return (
    <div>
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
        // {
        //   path: "/products/:id",
        //   element: <PCategory />,
        // },
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
