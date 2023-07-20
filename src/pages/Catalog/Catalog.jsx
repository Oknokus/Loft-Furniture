import PropTypes from 'prop-types';
import api from '../../config/api';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';
import { Slider } from '@mui/material';

import Card from '../../components/Cards/Card';
import CatalogFilter from "../../components/CatalogFilter";

import wishlistImg from "../../assets/wishlistImg.svg";
import heartIcon from "../../assets/heartIcon.png";


import styles from './Catalog.module.css';


const Catalog = () => {
    const[catalog, setCatalog] = useState([]);

    const {
        favorites,
        clickHandlefavorites,
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort,
        slider,
        setSlider,       
        user,
        addCardUser,
        addCountPlus,
        addCountMinus
     
    } = useContext(CustumContext);  

    useEffect(() => {
        let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;        
        let queryParamsApi = `?${search.length ? `title_like=${search}&`: ""}${category.length ? `category=${category}&` : ""}${sort.length && sort !== "rate" ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc` : ""}`


        api(`product${queryParamsApi}${queryParamsFromTo}`).json()
        .then(res => setCatalog(res))      
    }, [search, category, sort, slider]);
  
    return (
        <div className={styles.catalog}>
            <CatalogFilter slider={slider} setSlider={setSlider} />            
            <div className={styles.catalog_contaiter_item}>                         
                <div className={styles.container}>            
                {
                    catalog.map(element => (                                   
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
                                    {
                                        user.carts?.some(el => el.id === element.id) ?
                                        <div className={styles.containerBtn}>
                                        <button 
                                            className={styles.container_btn_cart}
                                            onClick={() => addCountPlus(element.id)}
                                            style={{backgroundColor:"red"}}
                                            type="button">+</button>
                                        <span>
                                            {
                                                user.carts.find(el => el.id === element.id).count
                                            }                                            
                                            </span>
                                        <button 
                                            className={styles.container_btn_cart}
                                            onClick={() => addCountMinus(element.id)}
                                            style={{backgroundColor:"green"}}
                                            type="button">-</button>
                                        </div> :
                                        <button
                                            className={styles.container_btn} 
                                            onClick={() => addCardUser(element)}>Добавить в корзину
                                        </button>
                                    }
                                                                            
                        </ul>
                    ))
                }          
                </div>  
            </div>     
        </div>
    )
}

export default Catalog;