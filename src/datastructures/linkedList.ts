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
}
