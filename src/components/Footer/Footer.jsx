import React from 'react';
import styles from './Footer.module.css'
import home from '../../assets/footer/home.svg'
import user from '../../assets/footer/user.svg'
import phone from '../../assets/footer/phone.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <button className={styles.button}>
                <img src={home} alt="Иконка дома"/>
                Использовать
            </button>
            <button className={styles.button}>
                <img src={user} alt="Иконка пользователя"/>
                О проекте
            </button>
            <button className={styles.button}>
                <img src={phone} alt="Иконка пользователя"/>
                Связаться
            </button>
        </footer>
    );
};

export default Footer;
