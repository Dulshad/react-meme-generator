import classNames from 'classnames'
import { useState, useEffect } from 'react'
import styles from "./Meme.module.css"
import memesData from "./../../memesData.js"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = useState([]);

    const { topText = "", bottomText = "", randomImage = "http://i.imgflip.com/1bij.jpg" } = meme ?? {};

    const memeTextTopClasses = classNames(styles.meme_text, styles.top)
    const memeTextBottomClasses = classNames(styles.meme_text, styles.bottom)

    useEffect(() => {
        const fetchMemes = () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
                .catch(error => {
                    console.error('Error fetching memes:', error);
                    setAllMemes(memesData);
                });
        };

        if (allMemes.length === 0) {
            fetchMemes();
        }
    }, [allMemes]);

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
        <main className={styles.meme_container}>
            <div className={styles.meme_form}>
                <div className={styles.meme_input}>
                    <div>
                        <label htmlFor="top-text">Top Text</label>
                        <input
                            type="text"
                            id="top-text"
                            name="topText"
                            value={topText || ""}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="bottom-text">Bottom Text</label>
                        <input
                            type="text"
                            id="bottom-text"
                            name="bottomText"
                            value={bottomText || ""}
                            onChange={handleChange}
                            required/>
                    </div>
                </div>

                <button onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
            </div>

            <div className={styles.meme}>
                <img src={randomImage} className={styles.meme_image} alt="Random image of a meme"/>
                <h2 className={memeTextTopClasses}>{topText}</h2>
                <h2 className={memeTextBottomClasses}>{bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;