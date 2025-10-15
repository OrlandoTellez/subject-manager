import { useState } from "react";
import styles from "./AddStudents.module.css";

interface Props {
    createStudents: (e: React.FormEvent) => void;
}

export const AddStudents = ({createStudents}: Props) => {
    const [rulesPlace, setRulesPlace] = useState("inicio");

    const toggleRulesPlace = () => {
        setRulesPlace(rulesPlace == "inicio" ? "final" : "inicio")
    }

    return (
        <>
            <form className={styles.form} onSubmit={createStudents}>
                <div className={styles.formHeader}>
                    <h2>Agregar Estudiante</h2>

                    <button onClick={toggleRulesPlace}>Al {rulesPlace == "inicio" ? "inicio" : "final"}</button>
                </div>
                <section className={styles.section}>
                    <div className={styles.formInput}>
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className={styles.formInput}>
                        <label>Email</label>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className={styles.formInput}>
                        <label>Edad</label>
                        <input type="number" placeholder="Edad" />
                    </div>
                </section>
                <div className={styles.formButton}>
                    <button type="submit">Agregar al {rulesPlace == "inicio" ? "inicio" : "final"}</button>
                </div>
            </form>
        </>
    )
}
