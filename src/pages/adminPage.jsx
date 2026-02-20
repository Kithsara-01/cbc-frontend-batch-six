import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className=" w-full h-screen bg-cyan-800 flex">
            <div className="w-[300px] h-full bg-white"></div>
            <div className="w-[calc(100%-300px)] bg-blue-900 h-full ">
                <Routes path="/">
                    <Route path="/" element={<h2>Dashbord</h2>}/>
                    <Route path="/products" element={<h2>Products</h2>}/>
                    <Route path="/orders" element={<h2>Orders</h2>}/>
                    
                
                </Routes>
            </div>
            
        </div>
    )
}