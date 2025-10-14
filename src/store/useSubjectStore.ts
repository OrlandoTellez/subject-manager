import { create } from "zustand";
import { Subject } from "../classes/subject";

interface SubjectStore {
  subjects: Subject[];
  loadSubjects: () => void;
  addSubject: (subject: Subject) => void;
}

export const useSubjectStore = create<SubjectStore>((set) => ({
  subjects: [],
  loadSubjects: () => {
    const stored = localStorage.getItem("subjects");
    if (stored) {
      const parsed = JSON.parse(stored);
      set({ subjects: parsed.map((s: any) => Object.assign(new Subject(s.name), s)) });
    }
  },
  addSubject: (subject) =>
    set((state) => {
      const updated = [...state.subjects, subject];
      localStorage.setItem("subjects", JSON.stringify(updated));
      return { subjects: updated };
    }),
}));
