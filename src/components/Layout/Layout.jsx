import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Catalog from "../../pages/Catalog";

import bgTitleImg from "../../assets/bgTitleImg.png"

import styles from './Layout.module.css';


const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />           
            <Catalog />                       
            <Footer />
        </div>
    )
}

export default Layout;