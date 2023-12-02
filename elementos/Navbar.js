import styles from '../src/styles/Home.module.css'; 

export default function Navbar() {
    return (
        <div className={styles.topo}>
            <h1 className={styles.titulo}>
                Mônica Descreve
            </h1>
            <a href='/'>
                <p>
                    Home
                </p>
            </a>
            <a href='/personagens'>
                <p>
                    Personagens
                </p>
            </a>
        </div>
    )
}
