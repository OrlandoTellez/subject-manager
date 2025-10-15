import styles from "./ListStudents.module.css";
import { Student } from "../types/type";

interface Props {
    students: Student[];
    invertList: () => void;
    removeDuplicates?: () => void;
    onDeleteStudent: (id: number) => void;
    onEditStudent: (id: number, updatedData: Partial<Student>) => void;
}

export const ListStudents = ({ students, invertList, onDeleteStudent, onEditStudent }: Props) => {
    return (
        <section className={styles.container}>
            <div className={styles.actions}>
                <div>
                    <button onClick={invertList}>Invertir lista</button>
                </div>
                <p>Operaciones de lista enlazada</p>
            </div>

            <article className={styles.list}>
                <h2>Lista de estudiantes</h2>

                {students.length === 0 ? (
                    <p>No hay estudiantes registrados</p>
                ) : (
                    students.map((student, index) => (
                        <div className={styles.listItem} key={index}>
                            <article>
                                <h3>{student.name}</h3>
                                <div>
                                    <p>{student.email}</p>
                                    <p>{student.age} años</p>
                                </div>
                            </article>
                            <div className={styles.buttons}>
                                <button
                                    onClick={() => {
                                        const name = prompt("Nuevo nombre:", student.name);
                                        const email = prompt("Nuevo email:", student.email);
                                        const age = prompt("Nueva edad:", student.age?.toString() || "");
                                        if (name && email && age) {
                                            if (student.id == undefined) return;
                                            onEditStudent(student.id, { name, email, age: Number(age) });
                                        }
                                    }}
                                >
                                    Editar
                                </button>
                                <button onClick={() => student.id && onDeleteStudent(student.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                )}
            </article>
        </section>
    );
};
