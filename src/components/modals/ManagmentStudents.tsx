import { useState, useEffect } from "react";
import { useSubjectStore } from "../../store/useSubjectStore";
import { Subject } from "../../classes/subject";
import styles from "./ManagmentStudents.module.css";
import { AddStudents } from "../forms/AddStudents";
import { ListStudents } from "../ListStudents";
import type { Student } from "../../types/type.d.ts";

interface Props {
  handleClose: () => void;
  subject?: Subject;
}

export const MangagmentStudents = ({ handleClose, subject }: Props) => {
  const { updateSubject } = useSubjectStore();
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    if (subject) setStudents(subject.printStudents());
  }, [subject]);

  const createStudents = (
    e: React.FormEvent,
    newStudent: Student,
    addAtStart: boolean
  ) => {
    e.preventDefault();
    if (!subject) return;
    if (!newStudent.name.trim() || !newStudent.email.trim()) return;

    // insertar en la lista enlazada
    if (addAtStart) {
      subject.students.insertAtStart(newStudent);
    } else {
      subject.insertStudent(newStudent);
    }

    setStudents(subject.printStudents());
    updateSubject(subject);
  };

  const invertList = () => {
    if (!subject) return;
    subject.invertList();
    setStudents(subject.printStudents());
    updateSubject(subject);
  };

  const removeDuplicates = () => {
    if (!subject) return;
    subject.deleteRepeatedStudents();
    setStudents(subject.printStudents());
    updateSubject(subject);
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
          <p>{students.length} estudiantes registrados</p>
          <p>Lista enlazada</p>
        </div>

        <AddStudents createStudents={createStudents} />

        <article>
          <ListStudents
            students={students}
            invertList={invertList}
            removeDuplicates={removeDuplicates}
          />
        </article>
      </article>
    </section>
  );
};
