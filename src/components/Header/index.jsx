import styles from "./style.module.css"
import{Link} from "react-router-dom"

function Header(){

    return(
    <header className={styles.header}>
        <Link to="/" className={styles.link}><h4>Adventure Trails FD</h4></Link>
        <nav className={styles.nav}>
            <Link to="/listaTrilhas" className={styles.link}>Explorar Trilhas</Link>
            <Link to="/cadastro" className={styles.link}>Cadastrar Trilhas</Link>
        </nav>
    </header>
    );
}
export default Header;