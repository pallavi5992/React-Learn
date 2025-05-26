import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestrauntCard from "./components/RestrauntCard";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";

/*
header
  -logo
  -Nav Items
Body
   -search
   - Restrutant container
         - resturant Card
 Footer 
  -copy right
  -link
  -address
  -contact 


*/


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
            children:[ 
              {
            path:"/",
            element:<Body/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/restraunt/:resId",
            element:<RestrauntMenu/>
          }
        ],
    errorElement:<Error/>
  },
 
])
// Mount it to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
