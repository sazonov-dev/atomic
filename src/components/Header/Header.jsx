import React from 'react';
import styles from './Header.module.css';
import personImg from '../../assets/header/person.svg'
import personBgImg from '../../assets/header/person-bg.svg'
import arrow from '../../assets/header/arrow.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <h2 className={styles.logo}>ВСС</h2>
                <div className={styles.link}>
                    <button className={styles.button}>Видео</button>
                    <button className={styles.button}>Аудио</button>
                    <button className={styles.button}>История</button>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <img className={styles.arrow} src={arrow} alt="Изображение стрелки"/>
                    <h2 className={styles.text}>
                        ТРАНСКРИБАТОР <span className={styles.span}>ОНЛАЙН</span>
                    </h2>
                    <button className={styles.use}>использовать</button>
                    {/*<img className={styles.arrowDown} src={arrowButton} alt="Изображение"/>*/}
                </div>
                <div className={styles.person}>
                    <img className={styles.personBg} src={personBgImg} alt="Задний фон изображения человека"/>
                    <img className={styles.personImg} src={personImg} alt="Изображение человека"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
