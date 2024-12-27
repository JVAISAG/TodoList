import { Outlet,Link } from "react-router"
import "./Loginstyles.css"
import {App} from "./App"

export default function Login(){


    function handleLogin({userId,password}){
        
    }
    return(
        <div id="loginContainer">
            <label htmlFor="userId">
            
             <span>UserName : </span>   <input type="text" name="userId" id="userId"/>
             <span>Password : </span>   <input type="password" name="password" id="password"/>
            </label>
        <Link to={<App/>}>
        <button id="loginbtn">
              Login
            </button>
        </Link>
        </div>
    )
}