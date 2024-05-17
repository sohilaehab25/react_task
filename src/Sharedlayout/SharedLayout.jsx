import { Outlet } from "react-router-dom";
import Footer from "../copmonents/footer";
import NavBar from "../copmonents/navBar";

 function SharedLayout(){
    return(
        <>
        <NavBar/>
        <Outlet></Outlet>
        <Footer/>

        </>
    )
}

export default SharedLayout;