import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';
import { Link } from 'react-router-dom';

import Card from "../../components/Cards";

import wishlistImg from "../../assets/wishlistImg.svg";
import heartIcon from "../../assets/heartIcon.png";


import styles from './Favorites.module.css';
import { useState } from 'react';


const Favorites = () => {   
    const {
        favorites,
        clickHandlefavorites
    } = useContext(CustumContext);
      
        return (
            <>  
                {            
                    favorites.length !== 0 ?                               
                    <>                        
                        <p className={styles.p_catalog_desc}>Хиты продаж</p>                          
                            <div className={styles.container}>            
                            {
                                favorites.map(element =>                                                                                                
                                    <ul                             
                                        className={styles.catalog_container}
                                            key={element.id}>                                                           
                                            <img 
                                                className={styles.container_icon}
                                                onClick={() => clickHandlefavorites(element)}                                   
                                                
                                                src={favorites.find(item => item.id === element.id) ? heartIcon: wishlistImg} alt="wishlistImg" />                                                                 
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
                                )
                            }          
                            </div>
                    </>
                    :
                    <>
                        <h1 style={{textAlign:'center'}}>Нет товаров</h1>
                    </>
                } 
            </>                
            )             
}

export default Favorites;