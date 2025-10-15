import { useState } from "react";
import { useSubjectStore } from "../../store/useSubjectStore";
import { Subject } from "../../classes/subject";
import styles from "./ManagmentStudents.module.css";
import { AddStudents } from "../forms/AddStudents";

interface Props {
    handleClose: () => void;
    subject?: {
        name: string;
    };
}

export const MangagmentStudents = ({ handleClose, subject }: Props) => {
    const [subjectName, setSubjectName] = useState("");
    const {addSubject} = useSubjectStore()

    const createStudents = (e: React.FormEvent) => {
        e.preventDefault();
        if (!subjectName.trim()) return;

        const newSubject = new Subject(subjectName.trim());

        addSubject(newSubject)

        setSubjectName("");
        handleClose(); 
    };

    return (
        <section className={styles.container}>
            <article className={styles.modal}>
                <div className={styles.header}>
                    <h2>{subject?.name}</h2>
                    <button type="button" onClick={handleClose} className={styles.exit}>
                       <h2>x</h2>
                    </button>
                </div>


                <div className={styles.info}>
                    <p>0 estudiantes registrados</p>
                    <p>Lista enlazada</p>
                </div>
           
                <AddStudents createStudents={createStudents} />
            </article>
        </section>
    );
};
