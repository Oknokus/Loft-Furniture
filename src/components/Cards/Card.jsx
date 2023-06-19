import PropTypes from 'prop-types';
import ky from "ky";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';
import { Link, useLocation } from 'react-router-dom';

import api from '../../config/api';

import wishlistImg from "../../assets/wishlistImg.svg"


import styles from './Card.module.css';


const Card = () => { 
    const location = useLocation();
    const {
        catalog,        
        getCardApi 
    } = useContext(CustumContext)
  
    useEffect(() => {
        getCardApi()      
    }, [])

    return (
        <>
            <p className={styles.p_catalog_desc}>Хиты продаж</p>  
            <div className={styles.container}>            
                {
                    catalog.map(element => (                                   
                        <ul                             
                             className={styles.catalog_container}
                                key={element.id}>                             
                                <img 
                                    className={styles.container_icon}
                                    src={wishlistImg} alt="wishlistImg" />
                                <li>
                                <Link to={`/product/${element.id}`}>                    
                                    <img 
                                        className={styles.container_img}
                                        src={`../${element.image}`}  alt="" /> 
                                    </Link>  
                                </li>                     
                                <li>
                                    <h3>{element.title}</h3>
                                </li>
                                <li>
                                    <p>{element.category}</p>
                                </li>
                                <li>
                                    <h4>{element.price}</h4>
                                </li> 
                                <li>
                                    <h4>{element.rating}</h4>
                                </li>
                                <li>
                                    <p>{element.description}</p>
                                </li>  

                                <li className={styles.catalog_container_size}>
                                    <p className={styles.collection_description}>Размеры</p>
                                    <div className={styles.collection_size}><span>Ширина: {element.width}</span> <span>Глубина: {element.deep}</span> <span>Высота: {element.height}</span></div>
                                </li>                                                         
                        </ul>
                    ))
                }          
            </div>
        </>
    )
}

export default Card;