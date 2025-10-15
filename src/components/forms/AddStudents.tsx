import { useState } from "react";
import styles from "./AddStudents.module.css";
import type { Student } from "../../types/type.d.ts";

interface Props {
  createStudents: (e: React.FormEvent, newStudent: Student, addAtStart: boolean) => void;
}

export const AddStudents = ({ createStudents }: Props) => {
  const [rulesPlace, setRulesPlace] = useState("inicio");
  const [student, setStudent] = useState<Student>({ name: "", email: "", age: 0 });

  const toggleRulesPlace = () => {
    setRulesPlace(rulesPlace == "inicio" ? "final" : "inicio");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    createStudents(e, student, rulesPlace === "inicio");
    setStudent({ name: "", email: "", age: 0 });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2>Agregar Estudiante</h2>
        <button type="button" onClick={toggleRulesPlace}>
          Al {rulesPlace === "inicio" ? "inicio" : "final"}
        </button>
      </div>

      <section className={styles.section}>
        <div className={styles.formInput}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={student.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formInput}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formInput}>
          <label>Edad</label>
          <input
            type="number"
            name="age"
            placeholder="Edad"
            value={student.age}
            onChange={handleChange}
          />
        </div>
      </section>

      <div className={styles.formButton}>
        <button type="submit">Agregar al {rulesPlace}</button>
      </div>
    </form>
  );
};
