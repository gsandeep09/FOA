
import { clearCart } from "../utils/cartSlice";
import RestaurantMenuList from "./RestaurantMenuList";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {

    const cart = useSelector((store) => store.cart.items);
    // console.log(cart);
 const dispatch=useDispatch();
 const handleCart=()=>{

    dispatch(clearCart());
    if(clearCart.length===0){
       return <h1>empty Cart</h1>
    }

 }


    return (
        <div className="w-6/12 mx-auto bg-gray-200 my-2 ">
            <div className="text-center">
                <h1 className="font-bold text-center text-2xl">Cart</h1>
                <button className="text-lg bg-black rounded px-2 w-34 m-1 text-white text-center" onClick={handleCart}>Clear Cart</button>
              
              

            </div>
            <div>
                
               {cart.length===0 && <h1>Empty cart</h1>}
                <RestaurantMenuList Data={cart} />
               
                
            </div>
        </div>
    )
    
}
export default Cart;