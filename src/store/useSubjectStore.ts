// store/useSubjectStore.ts
import { create } from "zustand";
import { Subject } from "../classes/subject";
import { LinkedList } from "../classes/linkedList";
import type { Student } from "../types/type.d.ts";
import { saveToLocalStorage } from "../helpers/saveToLocaStorage.ts";

interface SubjectStore {
  subjects: Subject[];
  addSubject: (subject: Subject) => void;
  updateSubject: (subject: Subject) => void;
  loadSubjects: () => void;
}

export const useSubjectStore = create<SubjectStore>((set, get) => ({
  subjects: [],

  addSubject: (subject) => {
    const updated = [...get().subjects, subject];
    saveToLocalStorage(updated);
    set({ subjects: updated });
  },

  updateSubject: (updatedSubject) => {
    const updated = get().subjects.map((s) =>
      s.name === updatedSubject.name ? updatedSubject : s
    );
    saveToLocalStorage(updated);
    set({ subjects: updated });
  },

  loadSubjects: () => {
    const stored = localStorage.getItem("subjects");
    if (!stored) return;

    const parsed = JSON.parse(stored);

    const subjects = parsed.map((s: any) => {
      const subject = new Subject(s.name);
      const list = new LinkedList();

      s.students.forEach((student: Student) => list.insert(student));

      subject.students = list;
      return subject;
    });

    set({ subjects });
  },
}));

