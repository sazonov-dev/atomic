import React, {CSSProperties, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../Header/Header.module.css";
import st from '../Video/Video.module.css'
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: "white",
};

const Audio = () => {
    const [audio, setAudio] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [transcribeContent, setTranscribeContent] = useState([])
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(file);
        setAudio(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (audioFile) {
            const formData = new FormData();
            formData.append('audio', audioFile);

            setLoading(true);

            const requestTimeout = 500000; // 500 секунд

            const fetchData = async () => {
                try {
                    const response = await Promise.race([
                        fetch('https://pythonatomicbackend.ru/upload-audio', {
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
                            <input type="file" name="file" accept="audio/*" onChange={handleFileChange}/>
                            <span>Выберите файл</span>
                        </label>
                        {audio === true ? <button className={st.button} type="submit">Транскрибировать</button> : <button className={st.button_inactive} disabled type="submit">Транскрибировать</button>}
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

export default Audio;
