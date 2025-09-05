import type { Student } from "../types/type.d.ts";

export class Node {
    student: Student
    next: Node | null

    constructor(student: Student) {
        this.student = student
        this.next = null
    }
}

