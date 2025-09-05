import { Node } from "./nodes.ts"
import type { Student } from "../types/type.d.ts"


export class LinkedList {
    head: Node | null

    constructor() {
        this.head = null
    }

    // Insert a new node at the end of the list
    insert(student: Student){
        const newNode = new Node(student)

        if(this.head === null){
            this.head = newNode
            return
        }

        let currentNode = this.head

        while(currentNode.next ){
            currentNode = currentNode.next
        }

        currentNode.next = newNode
    }

    // Search a student by id
    search(id: number): Node | null{
        let currentNode = this.head

        while(currentNode){
            if(currentNode?.student.id === id) return currentNode

            currentNode = currentNode?.next
        }

        return null
    }

    // Delete a node by id
    delete(id: number){
        if(!this.head) return

        if(this.head.student.id === id){
            this.head = this.head.next
            return
        }

        let currentNode = this.head

        while(currentNode.next){
            if(currentNode.next.student.id === id){
                currentNode.next = currentNode.next.next
                return
            }
            currentNode = currentNode.next
        }
    }

    // Print the list
    print(): Student[]{
        let students: Student[] = []
        let currentNode = this.head
        while(currentNode){
            students.push(currentNode.student)
            currentNode = currentNode.next
        }
        return students
    }

    // Invert the list
    invertirList(){
        let currentNode = this.head
        let prev: Node | null = null
        while(currentNode){
            const next = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode = next
        }
        this.head = prev
    }

    // Print the list in reverse order
    printReverse(): Student[]{
        let students: Student[] = []
        let currentNode = this.head
        while(currentNode){
            students.push(currentNode.student)
            currentNode = currentNode.next
        }
        return students.reverse()
    }

    // delte repeated students
    deleteRepeated(){
        const ids = new Set<number>()
        let currentNode = this.head
        let prev: Node | null = null
        while(currentNode){
            if(ids.has(currentNode.student.id)){
                if(prev){
                    prev.next = currentNode.next
                }
            }else{
                ids.add(currentNode.student.id)
                prev = currentNode
            }
            currentNode = currentNode.next
        }
    }

    // count the number of students
    count(): number{
        let count = 0
        let currentNode = this.head
        while(currentNode){
            count++
            currentNode = currentNode.next
        }
        return count
    }
}