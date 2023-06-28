
import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { useContext } from "react"


const Navbar = ()=> {
    const {isAuth} = useContext(AuthContext)

    //Styling of clickable icons
    const styleTabs = {margin: "2px", color:"aliceblue", textDecoration:"none", marginLeft:"5px", marginRight:"10px", fontWeight:"bolder", fontSize:"16px"}


    return(
        <div style={{display:"flex", alignItem:"center", justifyContent:"space-between", padding: "15px", backgroundColor:"black" }} >
            
            {/* logo sytle */}
            <div style={{color:"coral", fontSize:"25px", fontWeight:"bolder", marginLeft:"3px",height:"100%" }}>EmpDash</div>

            <div style={{height:"100%"}}>

            <Link to="/" style={styleTabs}>Home</Link>
            <Link to="/addemployee" style={styleTabs}>AddEmployee</Link>
            <Link to="/dashboard" style={styleTabs}>Dashboard</Link>
            <Link to="/login" style={styleTabs}>{isAuth?"Logout":"Login"}</Link>

            </div>
            
            {/* <Link to="/signup">Signup</Link> */}
        
        
        </div>
    )
}

export default Navbar