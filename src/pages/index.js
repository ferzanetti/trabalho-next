import Head from "next/head";
import Navbar from "../../elementos/Navbar";
import Rodape from "../../elementos/Rodape";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title> Mônica Descreve </title>
      </Head>
      <Navbar />
      <div className={styles.home}>
        <h1> Mônica Descreve</h1>
        <main>
          <p>Bem-vindo ao "Mônica Descreve", o seu guia definitivo para explorar os adoráveis e encantadores personagens da Turma da Mônica!</p>
          <p>Você pode acessar a página dos personagens, pelo o cabeçalho no topo do site ou
            clicando em: <a href="/personagens">Personagens</a></p>
        </main>
      </div>
      <Rodape />
    </div>
  )
}
