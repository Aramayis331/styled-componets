import { Route, Routes } from "react-router-dom";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/reset" element={ <ResetPassword /> } />
        </Routes>
    )
}

export default Routers;