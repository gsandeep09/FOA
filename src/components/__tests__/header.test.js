import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

//if there were multiple button inside component and we want to test for specific button we this method.
const loginButton=screen.getByRole("button",{name:"Login"});


expect(loginButton).toBeInTheDocument();

    

})

it("should render header component with Cart-(0 items)",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cart=screen.getByText("Cart-(0 items)");
    //or use rejex screen.getByText(/Cart/)
    

    expect(cart).toBeInTheDocument();


})

it("should render component with login button and clicked change to logout button",()=>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const logButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(logButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();



})

