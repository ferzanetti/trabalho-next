import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../../elementos/Navbar';
import Rodape from '../../elementos/Rodape';
function Users({ users }) {
    return (
        <div>
            <Navbar />
            <div className={styles.content2}>
                <h1> Lista de Personagens </h1>
                {users.map((user, index) => (
                    <Link href='/profile/[descricao].js' as={`/profile/${index}`}>
                        <div key={user.descricao}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=turma')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;