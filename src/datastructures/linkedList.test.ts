import { SinglyLinkedList } from './linkedList';

describe('linkedList', () => {
  it('can push new nodes onto the list', () => {
    const list = new SinglyLinkedList();

    list.push('cheese');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": null,
          "val": "cheese",
        },
        "length": 1,
        "tail": LLNode {
          "next": null,
          "val": "cheese",
        },
      }
    `);

    list.push('pizza');
    expect(list).toMatchInlineSnapshot(`
      SinglyLinkedList {
        "head": LLNode {
          "next": LLNode {
            "next": null,
            "val": "pizza",
          },
          "val": "cheese",
        },
        "length": 2,
        "tail": LLNode {
          "next": null,
          "val": "pizza",
        },
      }
    `);
  });

  describe('get', () => {
    const list = new SinglyLinkedList();
    list.push('burgers');
    list.push('fries');
    list.push('shakes');

    it('can fetch and return a node at the given index', () => {
      expect(list.get(2)).toMatchInlineSnapshot(`
        LLNode {
          "next": null,
          "val": "shakes",
        }
      `);
    });

    it('can return null by default if given invalid input', () => {
      const empty = new SinglyLinkedList();

      expect(list.get(-2)).toBe(null);
      expect(list.get(5)).toBe(null);
      expect(empty.get(1)).toBe(null);
    });

    it('does not break if implementing code mucks with the list', () => {
      const messedUp = new SinglyLinkedList();
      messedUp.push('pasta');
      messedUp.push('sauce');
      messedUp.push('meatball');

      // This is to make typescript happy.
      if (messedUp.head && messedUp.head.next) {
        messedUp.head.next.next = null;
      }

      expect(messedUp.get(2)).toBe(null);
    });
  });
});
