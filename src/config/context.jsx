import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import { useEffect } from "react";

export const CustumContext = createContext();

export const Context = (props) => {   
    const [user, setUser] = useState({email: ""});
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [])

    const registerUser = (user) => { 
        api.post("register", {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user,
                point: 0,
                orders: [],
                carts: [],
                city: "",
                home: "",
                street: ""
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate("/");
            localStorage.setItem('user', JSON.stringify(res.user))
        })       
    }
      
    const loginUser = (user) => {
        api.post("login", {
            headers:{
                'content-type': 'application/json'
            },
            json: {
                ...user
            }
            }).json().then((res) => {
                setUser(res.user);
                navigate("/");
                localStorage.setItem('user', JSON.stringify(res.user))
            })
        }      
        
    const logOut = () => {
        setUser({email: ""});
        navigate("/"),
        localStorage.removeItem("user")
    };
     


    const value = {        
        user,
        setUser,
        registerUser,
        loginUser,
        logOut       
    };


    return <CustumContext.Provider value={value}>
            {props.children}
        </CustumContext.Provider>
};

export default Context;