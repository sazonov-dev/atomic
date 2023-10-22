import React from 'react';
import styles from './Header.module.css';
import personImg from '../../assets/header/person.svg'
import personBgImg from '../../assets/header/person-bg.svg'
import arrow from '../../assets/header/arrow.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navHandler = (action) => {
        switch (action) {
            case 'video':
                return navigate('/atomic/video')
            case 'audio':
                return navigate('/atomic/audio')
            case 'history':
                return navigate('/atomic/history')
            case 'logo':
                return navigate('/atomic/')
            default:
                throw new Error('Не известный action, navHandler')
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <h2 className={styles.logo} onClick={() => navHandler('logo')}>ВСС</h2>
                <div className={styles.link}>
                    <button className={styles.button} onClick={() => navHandler('video')}>Видео</button>
                    <button className={styles.button} onClick={() => navHandler('audio')}>Аудио</button>
                    <button className={styles.button} onClick={() => navHandler('history')}>История</button>
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
                    <img className={styles.personImg} src={personImg} alt="Изображение человека"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
