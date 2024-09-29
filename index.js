import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
//Default import
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// Named import(Not object destructuring)
import { Title } from "./src/components/Header";
import * as Obj from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestruantMenu from "./src/components/RestruantMenu";
import Profile from "./src/components/Profile";
// import Instamart from "./src/components/Instamart";

// chunking
// Code spliting
// Dynamic Bundling
// Lazy Loading
// these all are same it is use when you have production level code (it contains thousands of components )
// parcel is the beast parcel bundles all you code into one single file that is dist/index.js when your code is heavy it degrades the performannce so chunking is used
// below creates new bundle for Instamart.js
// On Demand Loading -> upon first render -> suspend loading (to handle use Suspense)

const Instamart = lazy(() => import("./src/components/Instamart"));
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        // slash means from root =>localhost:1244/{path}
        path: "/about",
        element: <About />,
        children: [
          {
            // take relative path
            path: "profile", // parentPath/{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restruant/:id",
        element: <RestruantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(AppLayout());
root.render(<RouterProvider router={appRouter} />);
