import { LinkedList } from "./linkedList";
import type { Student } from "../types/type.d.ts";

export class Subject {
    name: string;
    students: LinkedList;

    constructor(name: string, students?: Student[]) {
        this.name = name;
        this.students = new LinkedList(students);
    }

    // Insert a student in the subject
    insertStudent(student: Student) {
        this.students.insert(student);
    }

    // Delete a student from the subject
    deleteStudent(id: number) {
        this.students.delete(id);
    }

    // Print the students in the subject
    printStudents(): Student[] {
        return this.students.print();
    }

    // Invert the list
    invertList() {
        this.students.invertirList();
    }

    // Print the students in the subject in reverse order
    printStudentsReverse(): Student[] {
        return this.students.printReverse();
    }

    // Delete repeated students
    deleteRepeatedStudents() {
        this.students.deleteRepeated();
    }
    
    // Count the number of students
    countStudents(): number {
        return this.students.count();
    }
}
