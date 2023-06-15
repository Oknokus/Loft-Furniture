import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { Link, json, useLocation } from 'react-router-dom';
import ky from 'ky';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';

import api from '../../config/api';

import styles from './Form.module.css';



const Form = () => {
    const{
        user,
        setuser,
        registerUser,
        loginUser
    } = useContext(CustumContext)

    const lacation = useLocation();   

    const {
        register,
        handleSubmit,
            formState: {
                errors               
        },
        reset,
        watch
    } = useForm({mode: "onblur"}); 
   

    const onSubmitForm = (data) => { 
        let{passwordConfirm, ...user} = data;


        if(location.pathname === "/register") {
            registerUser(user)
        } loginUser(user)          
    };

   
    const password = useRef();
    password.current = watch("password", "");


    const[passwordView, setPasswordView] = useState(false);


    return (
        <div className={styles.form}>
            <h2>Your logo</h2>                 
                <h1> 
                    {
                        lacation.pathname==='/register' ? "Sign up" : " Sign In "  
                    }                            
                        
                </h1>  

                <p>
                    {
                        lacation.pathname==='/register' ? 
                        <>
                            If have account click <Link to={"/login"}>Login</Link> :
                        </>
                        :
                        <>
                            If you dont have an account register<br/>
                            You can <Link to={"/register"}>Register here !</Link>
                        </> 
                    }                
                </p>            
                
                <div className={styles.form_containerItem}>
                    <form  
                        className={styles.container_form}
                        onSubmit={handleSubmit(onSubmitForm)} noValidate>
                            {
                                location.pathname==="/register" &&
                            
                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.name && errors.name.message}</span> 
                            
                                <input {...register("name", {
                                            required : {
                                                message: "Заполните поле",
                                                value: true
                                            },
                                            maxLength : {
                                                message: "Максимальное количество символов 10",
                                                value: 10 
                                            }, 
                                            minLength : {
                                                message: "Минимальное количество символов 3",
                                                value: 3
                                            }
                                        })} 
                                className={styles.form_container_input} 
                                type="text" placeholder="Enter name" />                           
                            </label>
                            }
                            {
                                location.pathname==="/register" &&
                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.surName && errors.surName.message}</span> 
                            
                                <input {...register("surName", {
                                            required : {
                                                message: "Заполните поле",
                                                value: true
                                            },
                                            maxLength : {
                                                message: "Максимальное количество символов 10",
                                                value: 10 
                                            }, 
                                            minLength : {
                                                message: "Минимальное количество символов 3",
                                                value: 3
                                            }
                                        })} 
                                className={styles.form_container_input} 
                                type="text" placeholder="Enter surname" />                           
                            </label>
                            }
                        
                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.email && errors.email.message}</span> 
                                
                                <input {...register("email", {
                                            required : {
                                                message: "Заполните поле",
                                                value: true
                                            },
                                            pattern : {
                                                message: "Заполните поле правильно",
                                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                            } 
                                        })}  
                                className={styles.form_container_input} 
                                type="email" placeholder="Enter email" />                          
                            </label>

                            {
                                location.pathname==="/register" &&                
                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.phone && errors.phone.message}</span> 
                                
                                <input {...register("phone", {
                                            required : {
                                                message: "Введите телефон",
                                                value: true
                                            }                                    
                                        })}  
                                className={styles.form_container_input} 
                                type="tel"  placeholder="Enter phone" />                         
                            </label>        
                            }             

                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.password && errors.password.message}</span> 
                            
                                <input {...register("password", {
                                            required : {
                                                message: "Заполните поле",
                                                value: true
                                            },
                                            maxLength : {
                                                message: "Максимальное число символов 10",
                                                value: 10 
                                            }, 
                                            pattern : {
                                                message: "Пароль  должен содержать не мение 8 символов, заглавную букву, число!",
                                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                            }
                                        })} 
                                className={styles.form_container_input}         
                                type={passwordView ? "text" : "password"} placeholder="Enter password" />  
                                <span 
                                    className={styles.form_container_inputSpan}
                                    onClick={() => setPasswordView(prev => !prev)}>🗁
                                </span>                                 
                            </label>

                            {
                                location.pathname==="/register" &&                
                            <label className={styles.form_container_label}>
                                <span className='login-container__form__errors'>{errors.passwordConfirm && errors.passwordConfirm.message}</span> 
                            
                                <input {...register("passwordConfirm", {
                                        validate: value => 
                                        value === password.current || "The password do not match" }
                                        )} 
                                className={styles.form_container_input}         
                                type="password" placeholder="Enter password confirm" /> 
                            </label>
                            }

                             
                            <label className={styles.form_container_label}>                                     
                            <button 
                                className={styles.form_container_btn} 
                                type="submit">
                                    {
                                        location.pathname==="/register" ? 
                                        "Register"
                                        : 
                                        "Login"    
                                    }                
                            </button>
                        </label>

                    </form>
                </div>
        </div>
    )
}


export default Form;