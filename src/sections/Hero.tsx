import styles from "./Hero.module.css";
import logoIcon from "../assets/icons/logo.svg";
import bookIcon from "../assets/icons/books.svg";
import studentsIcon from "../assets/icons/students.svg";
import listsIcon from "../assets/icons/lists.svg";
import { AddSubject } from "../components/modals/AddSubject";
import { useState } from "react";
import { useSubjectStore } from "../store/useSubjectStore";

export const Hero = () => {
  const { subjects } = useSubjectStore();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const totalSubjects = subjects.length;
  const totalStudents = subjects.reduce(
    (acc, subject) => acc + subject.countStudents(),
    0
  );
  const totalLists = totalSubjects;

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
            <p>{totalSubjects} materias</p>
          </div>
          <div>
            <img src={studentsIcon} alt="icon students" />
            <p>{totalStudents} estudiantes</p>
          </div>
          <div>
            <img src={listsIcon} alt="icon lists" />
            <p>{totalLists} listas enlazadas</p>
          </div>
        </article>

        <div className={styles.containerButtons}>
          <button onClick={openModal}>+ Nueva materia</button>

          {showModal && <AddSubject handleClose={handleClose} />}
        </div>
      </section>
    </>
  );
};
