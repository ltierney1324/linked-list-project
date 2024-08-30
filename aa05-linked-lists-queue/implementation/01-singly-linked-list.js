// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

    // Create a new node with the given value
    let newNode = new SinglyLinkedNode(val);

    // Check if the list is empty
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode; // Ensure the tail is updated as well for the first node
    } else {
        // Otherwise, insert the new node at the head
        newNode.next = this.head;
        this.head = newNode;
    }

    // Increment the length of the list
    this.length++;

    console.log('list: ', this);

    // Return the updated list
    return {
        head: this.head,
        length: this.length
    };

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
           this.length = 1;
            return this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return {
            head: this.head,
            length: this.length
        };

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if(!this.head){
            return undefined;
        }

        let removedHead = this.head;

        this.head = this.head.next;

        this.length--;

        if(this.length === 0){
            this.tail = 0;
        }

        return removedHead;



        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if(!this.head){
            return undefined;
        }
        let removedTail = this.tail;
        if(this.head === this.tail){

            this.head = null;
            this.tail = null;

        }else{
            let curNode = this.head;
            while(curNode.next !== this.tail){
                curNode = curNode.next;
            }
            curNode.next = null;
            this.tail = curNode;
        }

        this.length--;

        return removedTail;



        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if(this.head){
            return this.head.value;
        }

        return undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here
        if(!this.head){
            return;
        }

        let values = [];
        let curNode = this.head;

        while(curNode){
            values.push(curNode.value);
            curNode = curNode.next;

        }

        console.log(values.join(' -> '));

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
