import React from 'react';
import Header from "../Header/Header";
import styles from "../Header/Header.module.css";
import st from "../Video/Video.module.css";
import Footer from "../Footer/Footer";

const History = () => {
    return (
        <>
            <Header/>
            <div className={styles.line}></div>
            <div className={st.content}>
                <h2>Функция временно не доступна</h2>
            </div>
            <div className={styles.line}></div>
            <Footer/>
        </>
    );
};

export default History;
