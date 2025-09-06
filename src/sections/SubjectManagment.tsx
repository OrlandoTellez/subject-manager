import { useState } from "react";
import { Subject } from "../classes/subject";
import styles from "./SubjectManagment.module.css";
import { CardStartNow } from "../components/CardStartNow";

export const SubjectManagment = () => {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [subjectName, setSubjectName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentID, setStudentID] = useState<number>(0);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

    const createSubject = () => {
        if (!subjectName) return;
        const newSubject = new Subject(subjectName);
        setSubjects([...subjects, newSubject]);
        setSubjectName("");
    };

    const addStudent = () => {
        if (!selectedSubject || !studentName || !studentID) return;
        selectedSubject.insertStudent({ id: studentID, name: studentName });
        setStudentName("");
        setStudentID(0);
        setSubjects([...subjects]); // refresh state
    };

    const removeStudent = (id: number) => {
        if (!selectedSubject) return;
        selectedSubject.deleteStudent(id);
        setSubjects([...subjects]);
    };

    return (
        <>
            <section className={styles.container}>
                <article className={styles.articleStart}>
                    <CardStartNow />
                </article>
                
                <section className={styles.containerCreate}>

                    <article className={styles.containerCreateSubject}>
                        <h2>Create Subject</h2>
                        <div>
                            <input
                                value={subjectName}
                                onChange={(e) => setSubjectName(e.target.value)}
                                placeholder="Subject Name"
                            />
                            <button onClick={createSubject}>Create</button>
                        </div>
                    </article>

                    <article className={styles.containerSubjects}>
                        <h2>Subjects</h2>
                    {subjects.map((subject, idx) => (
                        <div key={idx}>
                            <button onClick={() => setSelectedSubject(subject)}>
                                Select {subject.name}
                            </button>
                        </div>
                    ))}

                    {selectedSubject && (
                        <div>
                            <h2>{selectedSubject.name}</h2>
                            <p>Total Students: {selectedSubject.countStudents()}</p>

                            <h3>Add Student</h3>
                            <input
                                type="number"
                                value={studentID}
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
                                    setSubjects([...subjects]);
                                }}
                            >
                                Invert List
                            </button>
                            <button
                                onClick={() => {
                                    selectedSubject.deleteRepeatedStudents();
                                    setSubjects([...subjects]);
                                }}
                            >
                                Remove Duplicates
                            </button>
                            <ul>
                                {selectedSubject.printStudents().map((student) => (
                                    <li key={student.id}>
                                        {student.id} - {student.name}{" "}
                                        <button onClick={() => removeStudent(student.id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    </article>
                </section>

                
            </section>
        </>
    )
}
