import {  Route, Routes , Link} from "react-router-dom";

import { FaBoxArchive } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

export default function AdminPage(){
    return(
        <div className=" w-full h-screen flex">
            <div className="w-[300px] h-full flex flex-col items-center">
                <span className="text-3xl font-bold my-5">Admin Panel</span>

                <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px] " to="/admin/Products"><FaBoxArchive/>Products</Link>
                <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px] " to="/admin/Orders"><FaBasketShopping/>Orders</Link>
                <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px] " to="/admin/Users"><BsFillPeopleFill/>Users</Link>
                <Link className="flex flex-row h-[60px] w-full border p-[20px] items-center text-xl gap-[25px] " to="/admin/Settings"><IoSettings/>Settings</Link>


             

            </div>


            <div className="w-[calc(100%-300px)]  h-full ">
                <Routes path="/">
                    <Route path="/" element={<h2>Dashbord</h2>}/>
                    <Route path="/products" element={<h2>Products</h2>}/>
                    <Route path="/orders" element={<h2>Orders</h2>}/>
                    <Route path="/users" element={<h2>Users</h2>}/>
                    <Route path="/settings" element={<h2>Settings</h2>}/>
                    
                
                </Routes>
            </div>
            
        </div>
    )
}