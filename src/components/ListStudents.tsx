import styles from "./ListStudents.module.css";

interface Student {
  name: string;
  email: string;
  age?: number;
}

interface Props {
  students: Student[];
  invertList: () => void;
  removeDuplicates: () => void;
}

export const ListStudents = ({ students, invertList, removeDuplicates }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.actions}>
        <div>
          <button onClick={invertList}>Invertir lista</button>
          <button onClick={removeDuplicates}>Eliminar duplicados</button>
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
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </article>
    </section>
  );
};
