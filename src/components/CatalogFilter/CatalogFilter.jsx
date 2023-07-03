import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { CustumContext } from '../../config/context';
import { useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import RangeSlider from "./RangeSlider";
import InputSelect from "./InputSelect";


import styles from './CatalogFilter.module.css';


const CatalogFilter = ({slider, setSlider}) => {
    const {
        category,
        setCategory,
        sort,
        setSort       
    } = useContext(CustumContext);

    const color = ["red", "black", "yellow", "green", "orange", "blue "];

    const changeReset = () => {
        setCategory("");
        setSlider([0, 3000]);
        setSort("")        
    };  
   
    return (
        <div className={styles.section_filter}>
            <h2 className={styles.filter_titleItem}>Раздел</h2>
                <InputSelect title="Категория" state={category} setState={setCategory} array={["Барные стулья", "Диваны", "Двухспальные кровати", "Комоды"]} />
                <InputSelect title="Сортировать" state={sort} setState={setSort} array={["asc", "desc", "rate"]} />

            <div>
                <h2 className={styles.filter_titleItem}>Цена</h2>
                <RangeSlider slider={slider} setSlider={setSlider} />
                <div className={styles.filter_value}>
                    <span>{slider[0]}</span>
                    -
                    <span>{slider[1]}</span>
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
                <Button style={{width:"100%"}} variant="contained" onClick={() => changeReset()}>Сбросить</Button>
        </div>
    )
}


export default CatalogFilter;