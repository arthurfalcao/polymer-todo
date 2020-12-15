import { PolymerElement, html } from "@polymer/polymer";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status";

import "./add-item";
import "./list-items";

class TodoApp extends PolymerElement {
  constructor() {
    super();

    afterNextRender(this, () => {
      this.addEventListener("addTodo", (e) => {
        this.todoList = e.detail.todoList;
      });

      this.addEventListener("removeTodo", (e) => {
        const todos = this.todoList.filter(
          (todo) => todo.id !== e.detail.todoId
        );

        this.todoList = todos;
        localStorage.setItem("todo-list", JSON.stringify(todos));
      });

      this.addEventListener("changeTodo", (e) => {
        const todos = this.todoList.map((todo) => {
          if (todo.id !== e.detail.todoId) return todo;
          return { ...todo, done: !todo.done };
        });

        this.todoList = todos;
        localStorage.setItem("todo-list", JSON.stringify(todos));
      });
    });
  }

  static get properties() {
    return {
      todoList: {
        type: Array,
        value: JSON.parse(localStorage.getItem("todo-list")) || [],
      },
    };
  }

  static get template() {
    return html`
      <h1>Polymer TODO</h1>
      <add-item></add-item>
      <list-items todo-list="{{todoList}}"></list-items>
    `;
  }
}

window.customElements.define("todo-app", TodoApp);
