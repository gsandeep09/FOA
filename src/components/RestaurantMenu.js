
import RestaurantMenuList from "./RestaurantMenuList";
import {useState} from "react";

const RestaurantMenu = ({ menuData }) => {
    // console.log(menuData);
    const [showData ,setShowData]=useState(false);
    const menu=menuData?.card?.card?.itemCards;
    // console.log(itemCards);
    return (
        <div className="bg-gray-100 px-2  cu">
            <div className="shadow-xl m-2 bg-gray-300" >
            <h1 className="font-bold text-lg px-1 cursor-pointer"  onClick={()=>{
                if(showData===false){
                    setShowData(true);
                }
                else{
                    setShowData(false);
                }

            }}>{ menuData?.card?.card?.title}</h1>
            </div>
            <div>
                {/* {showData && itemCards.map((res)=> <RestaurantMenuList  Data={res} key={res?.card?.info?.id}/>)}  */}
                
                    {showData &&  <RestaurantMenuList  Data={menu} />}
                

                
                
            </div>

        </div>

    )
}
export default RestaurantMenu;