import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact page component",()=>{
    test("should that contact componenet render or not",()=>{
        render(<Contact/>);
    
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    })
    test("should check wheather button rendered",()=>{
        render(<Contact/>);
        const button=screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
        
    
    })
    test("should input element is inside contact component",()=>{
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    
    })
});
