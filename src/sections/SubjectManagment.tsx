import { useState, useEffect } from "react";
import styles from "./SubjectManagment.module.css";
import { CardStartNow } from "../components/CardStartNow";
import { Subject } from "../classes/subject";
import { useSubjectStore } from "../store/useSubjectStore";
import { MangagmentStudents } from "../components/modals/ManagmentStudents";

export const SubjectManagment = () => {
    const [selectedSubject, setSelectedSubject] = useState<Subject>();
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)

    const openModal = (subject: Subject) => {
        setShowModal(true) 
        setSelectedSubject(subject)
    }
    const { subjects, loadSubjects } = useSubjectStore()

    // Cargar materias desde localStorage
    useEffect(() => {
        loadSubjects()
    }, []);

    if (subjects.length === 0) {
        return (
            <section className={styles.container}>
                <article className={styles.articleStart}>
                    <CardStartNow />
                </article>
            </section>
        );
    }

    return (
        <section className={styles.container}>
            <section className={styles.containerCreate}>
                <article className={styles.containerSubject}>
                    <article className={styles.subjectList}>
                        {subjects.map((subject, idx) => (
                            <div key={idx} className={styles.subjectCard}>
                                <h3>{subject.name}</h3>
                                <div>
                                    <span>Students: 0</span>
                                </div>
                                <button onClick={() => openModal(subject)}>
                                    Gestionar
                                </button>


                            </div>
                        ))}
                        {
                            showModal && (
                                <MangagmentStudents subject={selectedSubject} handleClose={handleClose} />
                            )
                        }
                    </article>
                </article>
            </section>
        </section>
    );
};
