import { Subject } from "../classes/subject";

export function saveToLocalStorage(subjects: Subject[]) {
  const serializable = subjects.map((s) => ({
    name: s.name,
    students: s.students.print(), 
  }));

  localStorage.setItem("subjects", JSON.stringify(serializable));
}
