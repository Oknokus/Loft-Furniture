import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import api from '../../config/api';

import wishlistImg from "../../assets/wishlistImg.svg";
import heartIcon from "../../assets/heartIcon.png";



import { CustumContext } from '../../config/context';
import Card from '../../components/Cards/Card';

import styles from './Product.module.css';


const Product = () => {  
    const params = useParams();
    const {
        product, 
        setProduct,
        clickHandlefavorites,
        favorites
    } = useContext(CustumContext);

    useEffect(() => {
        api(`product/${params.id}`).json()
        .then(res => setProduct(res))                    
    }, [])
    
    if("id" in product) {
        return (
            <>
                <section className={styles.product}>
                    <div className={styles.product_container}>
                        <div >
                            <img
                                className={styles.product_img} 
                                src={`../${product.image}`} alt="" />
                        </div>
                        <div className={styles.product_info}>
                            <span>Rating: {product.rating}</span>
                            <h2 className={styles.product_title}>{product.title}</h2>
                            <div className={styles.product_itemfavorites}>
                                <h4 className={styles.product_price}>{product.price}</h4>
                                <button className={styles.product_button}>Купить</button>
                                <span 
                                    className={styles.product_favorites}
                                    onClick={() => clickHandlefavorites(product)}><img src={favorites.find(elem => elem.id === product.id) ? heartIcon : wishlistImg} alt=""/>Добавить в желаемое</span>
                            </div>
                            <div className={styles.product_options}>
                                <span className={styles.product_span}>Цвет: <div className={styles.product_color} style={{backgroundColor:`${product.color}`}}></div></span>
                                <span>Количество: 0</span>
                                <span>Размер (Д × Ш × В): 
                                    <div>{product.width} {product.deep} {product.height}</div>
                                </span>
                            </div>
    
                            <h3>Описание</h3>
                            <p>
                                {product.description}                           
                            </p>
                        </div>
                    </div>
                </section>
                <Card />              
            </>
        )
    } else {
        <>
            <h2>...Loading</h2>
        </>
    }

}


export default Product;