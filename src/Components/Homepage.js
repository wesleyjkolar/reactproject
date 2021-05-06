import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";

import "../styling/home.css";


const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch()
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    };

   

    return (
        <div className="home__page" style={{display:isSignedIn ? "none" : "" }}>
            { !isSignedIn ? ( 
            <div className="login__message">
                <h2>A Blog Oasis</h2>
                <p>Did you know a group of crows is called a murder? 
                    What would one call a group of blogs?</p>
                <GoogleLogin
                clientId="1013527091067-jl76tib046c56v4dlvghs3iod9csu4sm.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login__button">
                        Login with Google
                    </button>
                 )}
                 onSuccess={login}
                 onFailure={login}
                 isSignedIn={true}
                 cookiePolicy={'single_host_origin'}
                 />
            </div> 
    ) : (
        ""
    )}
    </div>
            
    
    );
};

export default Homepage