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

    const preparedPhrases = (array) => {
        console.log(array)
        // const result = array.map((item) => {
        //     console.log(item[0])
        //     return item[0]
        // })
        //
        // setPreparedTranscribe(result);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // setTimeout(() => {
        //     setTranscribeContent([
        //         ["Диктор 1", "Привет, как дела?"],
        //         ["Диктор 2", "Привет, все хорошо"],
        //         ["Диктор 2", "Как твои дела?"],
        //         ["Диктор 1", "Тоже хорошо"]
        //     ])
        //
        //     setStatus(true);
        // }, 3000)

        if (videoFile) {
            const formData = new FormData();
            formData.append('video', videoFile);

            console.log('123')

            fetch('http://89.23.96.177/upload-video', {
                method: 'POST',
                mode: 'cors',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
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
                    {/*{status === true ? : null*/}
                    {/*})}*/}
                </div>
            </div>
            <div className={styles.line}></div>
            <Footer/>
        </>
    );
};

export default Video;
