import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';

import RangeSlider from "./RangeSlider";
import InputSelect from "./InputSelect";


import styles from './CatalogFilter.module.css';


const CatalogFilter = () => {
    const {
        category,
        setCategory,
        sort,
        setSort
    } = useContext(CustumContext);

    const color = ["red", "black", "yellow", "green", "orange", "blue "];
   
    return (
        <div className={styles.section_filter}>
            <h2 className={styles.filter_titleItem}>Раздел</h2>
                <InputSelect title="Категория" state={category} setState={setCategory} array={["Барные стулья", "Диваны", "Двухспальные кровати", "Комоды"]} />
                <InputSelect title="Сортировать" state={sort} setState={setSort} array={["asc", "desc", "rate"]} />

            <div>
                <h2 className={styles.filter_titleItem}>Цена</h2>
                <RangeSlider />
                <div className={styles.filter_value}>
                    <span>200</span>
                    -
                    <span>2000</span>
                </div>               
            </div>
            <h2 className={styles.filter_titleItem}>Цвет</h2>
            <div className={styles.filter_container_color}>
                {
                    color.map(color => (                        
                            <div key={color} className={styles.filter_color} style={{background:color}}></div>
                    ))
                }
             </div>
           
                <h2 className={styles.filter_titleItem}>Бренд</h2>
                <div className={styles.filter_desc}>
                    <label>Динс
                        <input type="checkbox" />
                    </label><label>Динс
                        <input type="checkbox" />
                    </label><label>Динс
                        <input type="checkbox" />
                    </label>  
                </div>  
                <button className={styles.filter_btn}>Показать ещё</button>
        </div>
    )
}


export default CatalogFilter;