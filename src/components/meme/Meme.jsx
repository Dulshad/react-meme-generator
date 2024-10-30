import styles from "./Meme.module.css"
import memesData from "./../../memesData.js"
import {useState} from 'react'

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getRandomMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const memeImageUrl = memesArray[randomIndex].url;

        setMeme(oldMeme => {
            return {
                ...oldMeme,
                randomImage: memeImageUrl
            }
        })
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
            <img src={meme.randomImage} className={styles['meme-image']} alt="A random top 100 meme image"/>
        </main>
    )
}

export default Meme;