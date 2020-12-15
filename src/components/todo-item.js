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
        <span>{{todoItem.item}}</span>
        <button on-click="handleRemove">X</button>
      </li>
    `;
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
