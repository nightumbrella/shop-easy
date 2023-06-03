import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";

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
