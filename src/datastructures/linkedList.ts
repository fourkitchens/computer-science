export class LLNode<T> {
  public next: LLNode<T> | null = null;
  public val: T | null = null;
  constructor(data: T) {
    this.val = data;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public head: LLNode<T> | null = null;
  public tail: LLNode<T> | null = null;
  public length = 0;

  /**
   *
   * @param data data that should be pushed onto the list.
   * @returns
   */
  public push(data: T): this {
    const node = new LLNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  /**
   * Get an item from the list at a given index.
   *
   * @param i index that should be returned.
   */
  public get(i: number): LLNode<T> | null {
    if (i < 0 || i > this.length || this.head === null) {
      return null;
    }

    let node = this.head;
    for (let j = 1; j <= i; j++) {
      if (node.next) {
        node = node.next;
      } else {
        return null;
      }
    }

    return node;
  }

  //public set(i: number, data: T) {}

  //public insert(i: number, data: T) {}

  //public remove(i: number) {}

  //public pop() {}

  //public shift() {}

  //public unshift() {}
}
