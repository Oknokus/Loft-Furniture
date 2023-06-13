import PropTypes from 'prop-types';
import ky from "ky";
import { useEffect, useState } from 'react';

import api from '../../config/api';

import wishlistImg from "../../assets/wishlistImg.svg"

import styles from './Catalog.module.css';


const Catalog = () => { 
    const[catalog, setCatalog] = useState([])
    useEffect(() => {
        api("users").json()
        .then(res => setCatalog(res)) 
    }, [])

    return (
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
                            <img 
                                className={styles.container_img}
                                src={element.img} alt="" />  
                            </li>                     
                            <li>
                                <h3>{element.colection}</h3>
                            </li>
                            <li>
                                <p>{element.name}</p>
                            </li>
                            <li>
                                <h4>{element.price}</h4>
                            </li> 

                            <li className={styles.catalog_container_size}>
                                <p className={styles.collection_description}>Размеры</p>
                                <div className={styles.collection_size}><span>Ширина</span> <span>Глубина</span> <span>Высота</span></div>
                            </li>  
                                                     
                        </ul>
                ))
            }          
                       
        </div>
    )
}

export default Catalog;