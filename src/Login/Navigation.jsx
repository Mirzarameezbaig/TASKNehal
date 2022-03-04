import React  from "react";
import { Button } from "react-bootstrap";
import {Link,Outlet} from 'react-router-dom';


export const Navigation=()=>{
    return(
        <div style={{backgroundColor:'black', color:'white'}}>
            
            <div>
            <Link to="/nav/home" style={{margin:"5px",textDecoration:'none'}} >Home</Link>
            <Link to="/nav/task" style={{margin:"5px",textDecoration:'none'}} >Task</Link>
            <Link to="/nav/user" style={{margin:"5px",textDecoration:'none'}} >User</Link>
            <Link to='/'><Button style={{float:'right',marginRight:'5%'}}>LogOut</Button></Link>
            </div>
            <Outlet/>
        </div>
    )
}
