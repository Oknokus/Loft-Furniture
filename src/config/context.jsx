import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CustumContext = createContext();

export const Context = (props) => {   
    const[user, setUser] = useState({email: ""});
    const[catalog, setCatalog] = useState([]);
    const[product, setProduct] = useState([]);
    const[favorites, setFavorites] = useState([]);
    const[search, setSearch] = useState([]);
    const [category, setCategory] = useState([]);
    const [sort, setSort] = useState([]);
    const [slider, setSlider] = useState([0, 3000]);
    
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if(localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        if(localStorage.getItem("favorites") !== null) {
            setFavorites(JSON.parse(localStorage.getItem("favorites")))
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
 
    const getCardApi = () => { 
        api("product/?_sort=sale&_order=desc&_limit=12").json()
        .then(res => setCatalog(res))         
    }  
    
    const clickHandlefavorites = (item) => {
        let changefavorites = favorites.find(elem => elem.id === item.id)

        if(changefavorites) {
            setFavorites(favorites.filter(elem => elem.id !== item.id))           
        } else {           
            setFavorites([...favorites, item])        
        }         
    }

    const addCardUser = (element) => { 
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
           json: {
                carts: [
                    ...user.carts, 
                    {...element, count: 1}
                ]
            }       
        }).json().then((res) => {           
           setUser(res),
           localStorage.setItem("user", JSON.stringify(res))
        })       
    }

    const addCountPlus = (id) => { 
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
           json: {
                carts: user.carts.map(el => {
                    if(el.id === id) {
                        return{...el, count: el.count + 1}
                    } 
                    return el                    
                })
            }       
        }).json().then((res) => {           
           setUser(res),
           localStorage.setItem("user", JSON.stringify(res))
        })       
    }

    const addCountMinus = (id) => { 
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
           json: {
                carts: user.carts.find(el=> el.id === id).count > 1 ? user.carts.map(el => {
                    if(el.id === id) {
                        return{...el, count: el.count - 1}
                    } 
                    return el                    
                }): user.carts.filter(el => el.id !== id)
            }       
        }).json().then((res) => {           
           setUser(res),
           localStorage.setItem("user", JSON.stringify(res))
        })       
    }
 

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))   
    }, [favorites])
        
    useEffect(() => {               
        setSearch("")       
    }, [location.pathname])

  
 
    const value = {        
        user,
        setUser,
        registerUser,
        loginUser,
        logOut,
        catalog,
        getCardApi,
        product, 
        setProduct,
        clickHandlefavorites,
        favorites,
        setSearch,
        search,
        category,
        setCategory,
        sort, 
        setSort,
        slider, 
        setSlider,
        addCardUser,
        addCountPlus,
        addCountMinus    
    };

    

    return <CustumContext.Provider value={value}>
            {props.children}
        </CustumContext.Provider>
};

export default Context;