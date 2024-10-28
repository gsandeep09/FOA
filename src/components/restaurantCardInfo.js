import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCardInfo=()=>{

    const [resInfo,setResInfo]=useState([]);

    const {resId}=useParams();
    
    useEffect(()=>{

        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId);
        const json= await data.json();
        
        const item=json;
        console.log(item);
        setResInfo(item);

    }
    const {name,cuisines=[]}=resInfo?.data?.cards[2]?.card?.card?.info||{};
    const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((data)=> { return data?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});

    // console.log(categories);

    return(
        
        <div className="w-6/12 mx-auto my-4 p-2">
        <div className="bg-gray-200 m-2 p-2">
        <h1>{name}</h1>
        <h2>{cuisines}</h2>
        </div>
        <div className="">
            {categories?.length>0?categories.map((menu)=> <RestaurantMenu menuData={menu} key={menu?.card?.card?.title}/>):<p></p>}
          
         
        </div>
        
        </div>
    )
}
export default RestaurantCardInfo;