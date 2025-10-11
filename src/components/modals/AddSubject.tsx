import styles from "./AddSubject.module.css";

interface Props {
    handleClose: () => void
    createSubject: () => void
}

export const AddSubject = ({ handleClose, createSubject }: Props) => {
    return (
        <>
            <section className={styles.container}>
                <article className={styles.modal}>
                    <div>
                        <h2>Nueva Materia</h2>
                        <p>Crea una nueva materia para gestionar estudiantes</p>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.formInput}>
                            <label>Nombre de la materia *</label>
                            <input type="text" placeholder="Ej: Matemáticas, Inglés, etc." />
                        </div>
                         <div className={styles.formInput}>
                            <label>Descripción</label>
                            <textarea placeholder="Ej: Estudiantes de la materia, etc." className={styles.textarea} />
                        </div>
                        <div className={styles.formButtons}>
                            <button onClick={handleClose} className={styles.exit}>Cancelar</button>
                            <button onClick={createSubject}>+ Crear Materia</button>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
