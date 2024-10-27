import styles from './Header.module.css'
import trollLogo from '../../images/troll-face.png'

const Header = () => {
    return (
        <div className={styles['header-container']}>
            <img src={trollLogo} className={styles['header-logo']} alt='logo of troll face meme' />
            <h1 className={styles['header-title']}>Meme Generator</h1>
        </div>
    )
}

export default Header;