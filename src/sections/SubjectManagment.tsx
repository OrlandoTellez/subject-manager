import { useState, useEffect } from "react";
import styles from "./SubjectManagment.module.css";
import { CardStartNow } from "../components/CardStartNow";
import { Subject } from "../classes/subject";
import { useSubjectStore } from "../store/useSubjectStore";
import { MangagmentStudents } from "../components/modals/ManagmentStudents";

export const SubjectManagment = () => {
    const [studentName, setStudentName] = useState("");
    const [studentID, setStudentID] = useState<number>(0);
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

    console.log("subjects", subjects);


    const addStudent = () => {
        if (!selectedSubject || !studentName || !studentID) return;
        selectedSubject.insertStudent({ id: studentID, name: studentName });
        setStudentName("");
        setStudentID(0);
    };

    const removeStudent = (id: number) => {
        if (!selectedSubject) return;
        selectedSubject.deleteStudent(id);
    };

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

                    {/*
                    {selectedSubject && (
                        <div className={styles.subjectDetails}>
                            <h2>{selectedSubject.name}</h2>
                            <p>Total Students: {selectedSubject.countStudents()}</p>

                            <h3>Add Student</h3>
                            <input
                                type="number"
                                value={studentID || ""}
                                onChange={(e) => setStudentID(Number(e.target.value))}
                                placeholder="ID"
                            />
                            <input
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                placeholder="Name"
                            />
                            <button onClick={addStudent}>Add</button>

                            <h3>Student List</h3>
                            <button
                                onClick={() => {
                                    selectedSubject.invertList();
                                }}
                            >
                                Invert List
                            </button>
                            <button
                                onClick={() => {
                                    selectedSubject.deleteRepeatedStudents();
                                }}
                            >
                                Remove Duplicates
                            </button>
                            <ul>
                                {selectedSubject.printStudents().map((student) => (
                                    <li key={student.id}>
                                        {student.id} - {student.name}{" "}
                                        <button onClick={() => removeStudent(student.id)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}
                </article>
            </section>
        </section>
    );
};
