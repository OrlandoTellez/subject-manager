import { useState } from "react";
import styles from "./AddSubject.module.css";
import { Subject } from "../../classes/subject";
import { useSubjectStore } from "../../store/useSubjectStore";

interface Props {
    handleClose: () => void;
}

export const AddSubject = ({ handleClose }: Props) => {
    const [subjectName, setSubjectName] = useState("");
    const {addSubject} = useSubjectStore()

    const createSubject = (e: React.FormEvent) => {
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
                    <h2>Nueva Materia</h2>
                    <p>Crea una nueva materia para gestionar estudiantes</p>
                </div>
                <form className={styles.form} onSubmit={createSubject}>
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
