import {RestroCardImg_Url} from "../utils/constants";

const RestaurantCards=(props)=>{
    
    const {resData}=props;
    // console.log(resData);
    const{name,cuisines,sla,costForTwo,avgRating,cloudinaryImageId
    }=resData?.info;
    return(
        <div data-testid="resCard" className="bg-gray-200 w-[230px] h-[450px] p-2 m-2 hover:border-2 hover:border-black">
            <img className="w-56 h-[220px]"  src={RestroCardImg_Url+cloudinaryImageId} alt="logo"/>
            <h2 className="font-bold text-lg mx-1">{name}</h2>
            <h3 className="mx-1 text-wrap overflow-auto" >{cuisines.join(",")}</h3>
            <span className="mx-1">{avgRating} stars</span>
            <span className="mx-2 my-1">{sla.deliveryTime} minutes</span>
            <span className="mx-1 my-1">{costForTwo}</span>
            

        </div>
    )
}
export default RestaurantCards;