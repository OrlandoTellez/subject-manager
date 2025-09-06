import styles from "./Hero.module.css";
import logoIcon from "../assets/icons/logo.svg"
import bookIcon from "../assets/icons/books.svg"
import studentsIcon from "../assets/icons/students.svg"
import listsIcon from "../assets/icons/lists.svg"
import logoReact from "../assets/react.svg"

export const Hero = () => {
  return (
    <>
        <section className={styles.container}>
          <article className={styles.containerArticle}>
            <div>
              <img src={logoIcon} alt="logo icon" />
            </div>
            <article>
              <h1>Sistema de Gestión</h1>
              <p>Administra materias y estudiantes con listas enlazadas</p>
            </article>
          </article>

          <article className={styles.containerArticle}>
            <div>
              <img src={bookIcon} alt="icon subject" />
              <p>0 materias</p>
            </div>
            <div>
              <img src={studentsIcon} alt="icon subject" />
              <p>0 estudiantes</p>
            </div>
            <div>
              <img src={listsIcon} alt="icon subject" />
              <p>0 Listas enlazadas</p>
            </div>
          </article>

          <div className={styles.containerButtons}>
            <button>+ Nueva materia</button>
          </div>
        </section>
    </>
  )
}
