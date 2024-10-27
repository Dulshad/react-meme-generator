import styles from "./Meme.module.css"
import memesData from "./../../memesData.js"

const Meme = () => {

    let url

    function getRandomMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length);

        url = memesArray[randomIndex].url
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
        </main>
    )
}

export default Meme;