import styles from './Header.module.css'
import trollLogo from '../../images/troll-face.png'

const Header = () => {
    return (
        <div className={styles.header_container}>
            <img src={trollLogo} className={styles.header_logo} alt='logo of troll face meme' />
            <h1 className={styles.header_title}>Meme Generator</h1>
        </div>
    )
}

export default Header;