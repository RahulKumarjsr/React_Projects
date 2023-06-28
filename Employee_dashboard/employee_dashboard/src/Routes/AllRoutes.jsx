import Home from "../Components/Home"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import AddEmployee from "../Components/Addemployee"
import Dashboard from "../Components/Dashboard"
import {Routes, Route} from "react-router-dom"


const AllRoutes = ()=> {
    return(
        <div>
    <Routes>
     <Route path="/"  element={<Home/>} />
     <Route path="/login"  element={<Login/>} />
     <Route path="/signup"  element={<Signup/>} />
     <Route path="/addemployee"  element={<AddEmployee/>} />
     <Route path="/dashboard"  element={<Dashboard/>} />
 </Routes>

        </div>
    )
}

export default AllRoutes