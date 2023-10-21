import React from 'react';
import Header from "../Header/Header";
import About from "../About/About";
import styles from "../Header/Header.module.css";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const General = () => {
    return (
        <>
            <Header/>
            <div className={styles.line}></div>
            <About/>
            <div className={styles.line}></div>
            <Form/>
            <div className={styles.line}></div>
            <Footer/>
        </>
    );
};

export default General;
