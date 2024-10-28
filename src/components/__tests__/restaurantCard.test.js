import { render,screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import mock_Data from "../../utils/mock_Data/restaurantCard.json";
import "@testing-library/jest-dom";


it("should load RestaurantCard component with props",()=>{

    render(<RestaurantCards resData={mock_Data}/>)

    const name=screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})