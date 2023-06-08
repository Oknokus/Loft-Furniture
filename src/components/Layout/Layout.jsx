import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Catalog from "../../pages/Catalog";

import styles from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <Header />
            <Catalog />                       
            <Footer />
        </>
    )
}

export default Layout;