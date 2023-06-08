import PropTypes from 'prop-types';
import ky from "ky";
import { useEffect, useState } from 'react';

import api from '../../config/api';

import styles from './Catalog.module.css';


const Catalog = () => {
    const[catalog, setCatalog] = useState([])
    useEffect(() => {
        api("users").json()
        .then(res => setCatalog(res)) 
    }, [])
    const cat = catalog.map(el => el.colection)
    console.log(cat)

    return (
        <>
            <ul className={styles.catalog_container}>
                <li>
                    {cat}
                </li>
            </ul>
                       
        </>
    )
}

export default Catalog;