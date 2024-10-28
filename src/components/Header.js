import {useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{

    const [loginStatus,setLoginStatus]=useState("Login");

    const handleLogin=()=>{
        console.log("clicked");

 loginStatus==="Login"?setLoginStatus("Logout"):setLoginStatus("Login");

    }
    const onlineStatus=useOnlineStatus();

    const cart=useSelector((store)=>store.cart.items);
    // console.log(cart);

    return(
        <div className="flex justify-between shadow-lg ">
            <div className="w-4/12  ">
                <img className="w-36 " src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"/>
            </div>
            <div className="flex justify-around w-8/12 items-center">
                <ul className="flex  ">
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer">onlineStatus:{onlineStatus?"✅":"🛑"}</li>
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer"><Link to="/home">Home</Link></li>
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer"><Link to="/about">About_us</Link></li>
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer"><Link to="/contact">Contact-us</Link></li>
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer"><Link to="/cart">Cart-({cart.length} items)</Link></li>
                    <li className="p-2 mx-2 font-medium text-lg cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 mx-2 font-medium text-lg"><button className=" text-xl bg-gray-200 w-40 rounded-lg" onClick={handleLogin}>{loginStatus}</button></li>
                   
                </ul>
                
            </div>

        </div>
    )

}
export default Header;