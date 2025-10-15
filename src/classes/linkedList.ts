import { Node } from "./nodes.ts";
import type { Student } from "../types/type.d.ts";

export class LinkedList {
  head: Node | null;

  constructor(students?: Student[]) {
    this.head = null;

    if (students && Array.isArray(students)) {
      students.forEach((s) => this.insert(s));
    }
  }

  // Insert a new node at the end of the list
  insert(student: Student) {
    const newNode = new Node(student);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  // Insert at the start
  insertAtStart(student: Student) {
    const newNode = new Node(student);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Search a student by id
  search(id: number): Node | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.student.id === id) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  // Delete a node by id
  delete(id: number) {
    if (!this.head) return;

    if (this.head.student.id === id) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.student.id === id) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Print (to array)
  print(): Student[] {
    const students: Student[] = [];
    let currentNode = this.head;
    while (currentNode) {
      students.push(currentNode.student);
      currentNode = currentNode.next;
    }
    return students;
  }

  // Invert list
  invertirList() {
    let currentNode = this.head;
    let prev: Node | null = null;
    while (currentNode) {
      const next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
  }

  // Print reversed
  printReverse(): Student[] {
    return this.print().reverse();
  }

  // Delete repeated students (by email)
  deleteRepeated() {
    const seen = new Set<string>();
    let currentNode = this.head;
    let prev: Node | null = null;
    while (currentNode) {
      if (seen.has(currentNode.student.email)) {
        if (prev) prev.next = currentNode.next;
      } else {
        seen.add(currentNode.student.email);
        prev = currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // Count nodes
  count(): number {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  toArray(): Student[] {
    return this.print();
  }

  static fromArray(students: Student[]): LinkedList {
    return new LinkedList(students);
  }
}
