import PropTypes from 'prop-types';


import styles from './ImputSelect.module.css';
import { useEffect } from 'react';


const ImputSelect = ({title, state, setState, array}) => {    
    useEffect(() => {
    }, [state])
    const changeOptions = (e) => {
        setState(e.target.value)
    } 
    
    return (      
        <div className={styles.inputSelect_container}>   
            <label className={styles.inputSelect_label}>{title}</label>

            <div className={styles.imputSelect_selectContainer}>
                <select 
                    className={styles.imputSelect_select}
                    name="input" id="input-select"
                    onChange={(e) => changeOptions(e)}>
                    {
                        array && array.map(item => 
                            <option className={styles.imputSelect_option} key={item} value={item}>{item === "asc" ? "по возрастанию цены" : item === "desc" ? "по убыванию цены" : item === "rate" ? "по популярности" : item }</option>
                        )
                    }                
                </select>  
            </div>                                 
        </div>
    )
}


export default ImputSelect;