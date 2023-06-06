import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";

import styles from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <h1>Hello!! Layout</h1>
            <Header />
            <Footer />
        </>
    )
}

export default Layout;