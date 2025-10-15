import { useState } from "react";
import { useSubjectStore } from "../../store/useSubjectStore";
import { Subject } from "../../classes/subject";
import styles from "./ManagmentStudents.module.css";

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
                <div>
                    <h2>{subject?.name}</h2>
                </div>
                <form className={styles.form} onSubmit={createStudents}>
                    <div className={styles.formInput}>
                        <label>Nombre de la materia *</label>
                        <input
                            type="text"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            placeholder="Nombre de la materia"
                            required
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label>Descripción</label>
                        <textarea
                            placeholder="Ej: Estudiantes de la materia, etc."
                            className={styles.textarea}
                        />
                    </div>
                    <div className={styles.formButtons}>
                        <button type="button" onClick={handleClose} className={styles.exit}>
                            Cancelar
                        </button>
                        <button type="submit">+ Crear Materia</button>
                    </div>
                </form>
            </article>
        </section>
    );
};
