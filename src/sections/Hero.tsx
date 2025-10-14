import styles from "./Hero.module.css";
import logoIcon from "../assets/icons/logo.svg"
import bookIcon from "../assets/icons/books.svg"
import studentsIcon from "../assets/icons/students.svg"
import listsIcon from "../assets/icons/lists.svg"
import { AddSubject } from "../components/modals/AddSubject";
import { useState } from "react";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)

  const openModal = () => setShowModal(true)

  return (
    <>
        <section className={styles.container}>
          <article className={styles.containerArticle}>
            <div className={styles.logo}>
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
            <button onClick={openModal}>+ Nueva materia</button>

            {
              showModal && (
                <AddSubject handleClose={handleClose} />
              )
            }
          </div>
        </section>
    </>
  )
}
