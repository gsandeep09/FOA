import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import {useState,useEffect} from "react";
import Shimar from "./Shimar";
// import { useDispatch, useSelector } from "react-redux";
import adduser from "../utils/userSlice";



const Body=()=>{

    

    const [resListCard,setResListCard]=useState([]);
    const [filtered,setFiltered]=useState([]);
    const [isFiltered,setIsFiltered]=useState(false);
    const [search,setSearch]=useState("");
    const [user,setUser]=useState("def");
   
   
    
    // const dispatch=useDispatch();

//    const handleruser=(user)=>{
//     if(user){
//     dispatch(adduser(user));
//     }
//    }

//    const username=useSelector((store)=>store.user.username);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);
        
        const items=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(items);
        setResListCard(items);
        setFiltered(items);

    }
    
    
    const handleFilter=()=>{
     const result= filtered.filter((data)=>data?.info?.avgRating>=4.5);

     if(isFiltered===false){
        setResListCard(result);
        setIsFiltered(true);

     }
     else{
       setResListCard(filtered);
       setIsFiltered(false);  
     }
    };
    if(resListCard.length===0){

        return <Shimar/>
    }
    
    return(
        <div className="m-2">
        <div>
        <input data-testid="searchInput" className="m-2 p-1 border border-black w" type="text" placeholder="Search" value={search} onChange={(e)=>{
            setSearch(e.target.value);
            // console.log("h")
            

        }}/>
        <button className="w-20 bg-green-500 rounded m-2 p-1" onClick={()=>{
            const searched=filtered.filter((data)=>data?.info?.name.toLowerCase().includes(search.toLowerCase()));
            setResListCard(searched);
        }}> Search</button>
        <button className="w-60 bg-green-900 rounded m-2 p-1 text-white" onClick={handleFilter}>Top rated Restaurants</button>
        <input className="m-2 p-1 border border-black w" type="text" placeholder="Name here" value={user} onChange={(e)=>{
            
            setUser(e.target.value);
            

        }} />
        {/* <button className="w-60  bg-black rounded m-2 p-1 text-white" ></button> */}
        </div>
        <div className="flex flex-wrap">
       { resListCard.map((Data)=><Link to={"/restaurantId/"+Data?.info?.id} key={Data?.info?.id}><RestaurantCards resData={Data} /> </Link>)}
       
       
        </div>
        </div>
    )
}
export default Body;