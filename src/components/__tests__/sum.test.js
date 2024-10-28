import sum from "../sum";
test("should add the numbers",()=>{

 const result= sum(3,6);

 //Assertion
expect(result).toBe(9);

})