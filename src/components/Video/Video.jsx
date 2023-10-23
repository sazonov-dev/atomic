import React, {useEffect, useState, CSSProperties} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../Header/Header.module.css"
import st from './Video.module.css'

const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: "white",
};
const Video = () => {
    const [video, setVideo] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [transcribeContent, setTranscribeContent] = useState([])
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
        setVideo(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (videoFile) {
            const formData = new FormData();
            formData.append('video', videoFile);

            setLoading(true);
            const requestTimeout = 1000000; // 500 секунд

            const fetchData = async () => {
                try {
                    const response = await Promise.race([
                        fetch('https://pythonatomicbackend.ru/upload-video', {
                            method: 'POST',
                            mode: 'cors',
                            body: formData,
                        }),
                        new Promise((_, reject) =>
                            setTimeout(() => reject(new Error('Request timed out')), requestTimeout)
                        ),
                    ]);

                    const data = await response.json();
                    setTranscribeContent(data.result);
                    setLoading(false);
                } catch (error) {
                    console.error(error.message);
                }
            };

            fetchData();
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
                    )) : <ClipLoader
                        color={'#ffffff'}
                        loading={loading}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />}
                </div>
            </div>
            <div className={styles.line}></div>
            <Footer/>
        </>
    );
};

export default Video;


