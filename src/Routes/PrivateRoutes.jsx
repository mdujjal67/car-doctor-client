import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-ring loading-lg text-center"></span></div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};
PrivateRoutes.propTypes ={
    children:PropTypes.object
}
export default PrivateRoutes;