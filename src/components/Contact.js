
const Contact=()=>{
     return(
        <div className="m-2 p-2">
            <h1 className="p-2 m-2 text-lg">you are on Contact_us page</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-black p-2 m-2"/>
                <input type="text" placeholder="Message" className="border border-black p-2 m-2"/>
                <button className=" bg-gray-100 p-2 m-2 rounded-lg border border-black">Submit</button>
            </form>
        </div>
     )
}
export default Contact;