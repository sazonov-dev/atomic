import React from 'react';
import styles from './Form.module.css';
import person from '../../assets/form/person.svg'
import arrow from '../../assets/form/arrow.svg'
import send from '../../assets/form/send.svg'
const Form = () => {
    return (
        <section className={styles.form}>
            <div className={styles.info}>
                <h2 className={styles.title}>Хочешь связать с <span className={styles.span}>командой?</span></h2>
                <img className={styles.person} src={person} alt="Изображение персонажа"/>
                <img className={styles.arrow} src={arrow} alt="Иконка стрелки"/>
            </div>
            <form className={styles.form_action} action="send">
                <div className={styles.form_info}>
                    <div className={styles.info_item}>
                        <span className={styles.item_span}>Твое имя</span>
                        <input className={styles.item_input} type="text" placeholder="Имя"/>
                    </div>
                    <div className={styles.info_item}>
                        <span className={styles.item_span}>Твоя почта</span>
                        <input className={styles.item_input} type="text" placeholder="Почта"/>
                    </div>
                </div>
                <div className="form_text">
                    <div className={styles.info_item}>
                        <span className={styles.item_span}>Твое сообщение</span>
                        <input className={styles.text_input} type="text" placeholder="Сообщение"/>
                    </div>
                </div>
                <button className={styles.button}>Отправить <img className={styles.send} src={send} alt="Иконка отправки"/></button>
            </form>
        </section>
    );
};

export default Form;
