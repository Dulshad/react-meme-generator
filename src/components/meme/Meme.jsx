import styles from "./Meme.module.css"
import memesData from "./../../memesData.js"
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const Meme = () => {
        const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const memeTextTopClasses = classNames(styles['meme-text'], styles['top'])
    const memeTextBottomClasses = classNames(styles['meme-text'], styles['bottom'])
    const [allMemes, setAllMemes] = useState(memesData);

    useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(error => console.error('Error fetching memes:', error));
    }, [])

    function getRandomMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const memeImageUrl = allMemes[randomIndex].url;

        setMeme(oldMeme => {
            return {
                ...oldMeme,
                randomImage: memeImageUrl
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }));
    };

    return (
        <main className={styles['meme-container']}>
            <div className={styles['meme-form']}>
                <div className={styles['meme-input']}>
                    <div>
                        <label htmlFor="top-text">Top Text</label>
                        <input
                            type="text"
                            id="top-text"
                            name="topText"
                            value={meme.topText || ""}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="bottom-text">Bottom Text</label>
                        <input
                            type="text"
                            id="bottom-text"
                            name="bottomText"
                            value={meme.bottomText || ""}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>

                <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>

            <div className={styles['meme']}>
                <img src={meme.randomImage} className={styles['meme-image']} alt="Random image of a meme"/>
                <h2 className={memeTextTopClasses}>{meme.topText}</h2>
                <h2 className={memeTextBottomClasses}>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;