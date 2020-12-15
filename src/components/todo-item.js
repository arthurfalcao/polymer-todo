import { PolymerElement, html } from "@polymer/polymer";

class TodoItem extends PolymerElement {
  static get properties() {
    return {
      todoItem: {
        type: Object,
        value: {},
      },
    };
  }

  static get template() {
    return html`
      <li>
        <input type="checkbox" checked="{{todoItem.done}}" on-click="handleDone">{{todoItem.item}}</input>
        <button on-click="handleRemove">X</button>
      </li>
    `;
  }

  handleDone() {
    this.dispatchEvent(
      new CustomEvent("changeTodo", {
        bubbles: true,
        composed: true,
        detail: { todoId: this.todoItem.id },
      })
    )
  }

  handleRemove() {
    this.dispatchEvent(
      new CustomEvent("removeTodo", {
        bubbles: true,
        composed: true,
        detail: { todoId: this.todoItem.id },
      })
    );
  }
}

window.customElements.define("todo-item", TodoItem);
