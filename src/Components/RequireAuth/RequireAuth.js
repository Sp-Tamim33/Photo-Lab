import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from '../Spinner/Spinner';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {

        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;