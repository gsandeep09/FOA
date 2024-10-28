import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Grocery from "./components/Grocery";
import RestaurantCardInfo from "./components/restaurantCardInfo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout=()=>{
    return(
        <Provider store={appStore}>
        <div>
            <Header/>
          <Outlet/>
        </div>
        </Provider>
    )
}
const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/home",
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
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element:<Grocery/>
            },
            {
                path:"/restaurantId/:resId",
                element:<RestaurantCardInfo/>
            },
        ],
        errorElement:<Error/>

    }
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)