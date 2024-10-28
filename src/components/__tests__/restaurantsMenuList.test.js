
import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import mock_data from "../../utils/mock_Data/resMenuList.json";
import RestaurantCardInfo from "../restaurantCardInfo";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";




global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mock_data)
        }
    })
})
it("Integrated Testing",async()=>{
    await act(async()=>
        render(<BrowserRouter><Provider store={appStore}>
            <Header/>
            <RestaurantCardInfo/>
            <Cart/>
            </Provider></BrowserRouter>)

    )

    const accordian=screen.getByText("Recommended");
    fireEvent.click(accordian);
    const itemLists=screen.getAllByTestId("itemList");

    expect(itemLists.length).toBe(11);

    const addBtns=screen.getAllByRole("button",{name:"Add +"});
    
    
    fireEvent.click(addBtns[0]);
    
    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
   
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("itemList").length).toBe(13);

    const clearCartBtn=screen.getByRole("button",{name:"Clear Cart"});

    fireEvent.click(clearCartBtn);
    expect(screen.getAllByTestId("itemList").length).toBe(11);

    expect(screen.getByText("Empty cart")).toBeInTheDocument();
    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();




   



})