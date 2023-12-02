import styles from '../../styles/Home.module.css';
import Navbar from '../../../elementos/Navbar';
import Rodape from '../../../elementos/Rodape';
function Profile({ user = {} }) {
    return (
        <div className={styles.content}>
            <Navbar />
                <div className={styles.itens}>
                    <h1>{user.nome}</h1>
                    <h3>{user.usuario}</h3>
                    <p>{user.descricao}</p>
                </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=turma')
    const repo = await res.json()
    const user = await repo[context.params.descricao];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=turma')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { descricao: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;
