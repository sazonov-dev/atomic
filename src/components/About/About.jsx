import React from 'react';
import styles from './About.module.css';
import person from '../../assets/about/person.svg'
import light from '../../assets/about/lightbulb.svg'
import music from '../../assets/about/music.svg'
import arrow from '../../assets/about/arrow.svg'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.info}>
                <img className={styles.light} src={light} alt="Иконка лампочки"/>
                <img className={styles.music} src={music} alt="Иконка музыки"/>
                <img className={styles.arrow} src={arrow} alt="Иконка стрелки"/>
                <h2 className={styles.title}>О <span className={styles.span}>проекте</span></h2>
                <p className={styles.text}>Сервис “ВВС” транскрибирует аудио или видеозаписи онлайн-встреч, определяет кол-во участников, их персонифицированные атрибуты, а также сопоставляет их с произнесенными репликами.</p>
            </div>
            <div className="content">
                <img className={styles.person} src={person} alt="Изображение человека"/>
            </div>
        </section>
    );
};

export default About;
