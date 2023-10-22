import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../Header/Header.module.css"
import st from './Video.module.css'

const Video = () => {
    const [video, setVideo] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [status, setStatus] = useState(false);
    const [transcribeContent, setTranscribeContent] = useState([])
    const [preparedTranscribe, setPreparedTranscribe] = useState([])

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
        setVideo(true);
    };

    const preparedPhrases = (string) => {
        console.log(string.split('.'))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (videoFile) {
            const formData = new FormData();
            formData.append('video', videoFile);

            // https://pythonatomicbackend.ru/upload-video деплоенный бекенд
            // http://127.0.0.1:5000/upload-video локал
            fetch('http://127.0.0.1:5000/upload-video', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setTranscribeContent(data.result)
                })
                .catch((error) => console.log(error.message));
        }
    };

    return (
        <>
            <Header/>
            <div className={styles.line}></div>
            <div className={st.content}>
                <div className={st.info}>
                    <form className={st.form} onSubmit={handleSubmit}>
                        <label className={st.input_file}>
                            <input type="file" name="file" accept="video/*" onChange={handleFileChange}/>
                            <span>Выберите файл</span>
                        </label>
                        {video === true ? <button className={st.button} type="submit">Транскрибировать</button> : <button className={st.button_inactive} disabled type="submit">Транскрибировать</button>}
                    </form>
                </div>
                <div className={st.text}>
                    {transcribeContent.length > 0 ? transcribeContent.map((item) => (
                        <span key={item.id} className={st.textSpan}>{item.start.toFixed(1)}, {item.end.toFixed(1)} - {item.text}</span>
                    )) : null}
                </div>
            </div>
            <div className={styles.line}></div>
            <Footer/>
        </>
    );
};

export default Video;
