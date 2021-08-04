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
});
