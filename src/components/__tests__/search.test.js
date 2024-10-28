
import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import mock_data from "../../utils/mock_Data/resList_mockData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";



global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mock_data);
        }
    })
})

it("should get searched item in the body ",async()=>{
  await act(async()=>
   render(<BrowserRouter><Body/></BrowserRouter>)
)  ;

const searchInput=screen.getByTestId("searchInput");
fireEvent.change(searchInput,{target:{value:"pizza"}});

const searchButton=screen.getByRole("button",{name:"Search"});
fireEvent.click(searchButton);

const resCard=screen.getAllByTestId("resCard");
// console.log(resCard);

expect(resCard.length).toBe(5);

})

it("filter top rated restaurants ",async()=>{

    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    });

    const filterButton=screen.getByRole("button",{name:"Top rated Restaurants"});

    fireEvent.click(filterButton);
    const resCard=screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(11);

})