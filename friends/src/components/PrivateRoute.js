import React from "react";
import {Route,Redirect} from "react-router-dom";

//Private Route Requirements
//1. It has Same Api as route
//2.Render a route and pass all props to it 
//3. It checks if users is authenticated and if it passes then it renders property otherwise comes back to login page 

const PrivateRoute=({component:Component,...rest})=>{
return(
    <Route>
{...rest}

render={(props)=>{
    if(localStorage.getItem("token")){

        //if we get a token then authentication passes
        return <Component {...props}/>

    }
    else{
        return <Redirect to="/login"/>
    }
}

}
    </Route>
);
};
export default PrivateRoute;