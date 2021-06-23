export class LLNode<T> {
  public next: LLNode<T> | null = null;
  public val: T | null = null;
  constructor(public data: T) {
    this.val = data;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public head: LLNode<T> | null = null;
  public tail: LLNode<T> | null = null;
  public length: number = 0;

  public push(data: T) {
    // Fill this out!
  }
}
