// example singly list

// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: null
//       }
//     }
//   }
// }


// build class for linked List

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }
  
  prepend(value = null) {
    try {
      if (value === null) {
        throw Error('value is required')
      }
      const newNode = new Node(value)
      const nextNode = this.head
      this.head = newNode
      this.head.next = nextNode
      this.length++
      return this
    } catch (error) {
      console.error(error.message)
    }
  }

  append(value = null) {
    try {
      if (value === null) {
        throw Error('value is required')
      }
      const newNode = new Node(value)
      this.tail.next = newNode
      this.tail = newNode
      this.length++
      return this      
    } catch (error) {
      console.error(error.message)
    }
  }
  
  insert(index = 0, value = null) {
    try {
      if (value === null) {
        throw Error('value is required')
      }
      if(index >= this.length) {
        return this.append(value)
      }
      const newNode = new Node(value)
      const firstPointer = this.search(index -1)
      const holdingPointer = firstPointer.next
      firstPointer.next = newNode
      newNode.next = holdingPointer
      this.length++
      return this      
    } catch (error) {
      console.error(error.message)
    }
  }

  search(index) {
    try {
      if(index > this.length) {
        throw Error('The index is greater than length of list')
      }
      let counter = 0
      let currentNode = this.head
      while(counter !== index) {
        currentNode = currentNode.next
        counter++
      }
      return currentNode
    } catch (error) {
      console.error(error.message)
    }
  }

  remove(index = null) {
    try {
      if(index === null) {
        throw Error('index is required')
      }
      const prevPointer = this.search(index -1)
      const holdingPointer = this.search(index +1)
      if(!prevPointer) {
        this.head = this.head.next
        this.length--
        console.log(this)
        return this
      }
      if(!holdingPointer) {
        this.tail = prevPointer
        this.tail.next = null
        this.length--
        return this
      }
      prevPointer.next = holdingPointer
      this.length--
      return this
    } catch (error) {
      console.error(error.message)
    }
  }

}


let myLinkedList = new SinglyLinkedList(1)
console.log('init',myLinkedList)
myLinkedList.append(2)
console.log('append 1',myLinkedList)
myLinkedList.append(3)
console.log('append 2',myLinkedList)
myLinkedList.remove(1)
console.log('remove index 1',myLinkedList)