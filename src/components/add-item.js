import { PolymerElement, html } from "@polymer/polymer";

class AddItem extends PolymerElement {
  static get properties() {
    return {
      todoList: Array,
      todoItem: {
        type: String,
        value: "",
      },
    };
  }

  static get template() {
    return html`
      <input value="{{todoItem}}" on-keyup="handleKeyPress"></input>
      <button on-click="handleClick">Add item</button>
    `;
  }

  handleClick() {
    if (this.todoItem.length === 0) return;

    const storedTodoList = JSON.parse(localStorage.getItem("todo-list")) || [];

    const todoList = storedTodoList.concat({
      id: new Date().valueOf(),
      item: this.todoItem,
      done: false,
    });

    localStorage.setItem("todo-list", JSON.stringify(todoList));
    this.dispatchEvent(
      new CustomEvent("addTodo", {
        bubbles: true,
        composed: true,
        detail: { todoList },
      })
    );
    this.todoItem = "";
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    } else {
      this.todoItem = e.target.value;
    }
  }
}

window.customElements.define("add-item", AddItem);
