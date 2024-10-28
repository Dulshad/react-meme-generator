import styles from "./Meme.module.css"
import memesData from "./../../memesData.js"
import { useState } from 'react'

const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    function getRandomMemeImage() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const memeImageUrl = memesArray[randomIndex].url;

        setMemeImage(memeImageUrl)
    }

    return (
        <main className={styles['meme-container']}>
            <div className={styles['meme-form']}>
                <div className={styles['meme-input']}>
                    <div>
                        <label htmlFor="top-text">Top Text</label>
                        <input type="text" id="top-text" name="top-text" required/>
                    </div>
                    <div>
                        <label htmlFor="bottom-text">Bottom Text</label>
                        <input type="text" id="bottom-text" name="bottom-text" required/>
                    </div>
                </div>

                <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className={styles['meme-image']} />
        </main>
    )
}

export default Meme;