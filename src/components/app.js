import { PolymerElement, html } from "@polymer/polymer";

import "./add-item";
import "./list-items";

class TodoApp extends PolymerElement {
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
      <p>Hello World 2</p>
      <add-item></add-item>
      <list-items todo-list="{{todoList}}"></list-items>
    `;
  }
}

window.customElements.define("todo-app", TodoApp);
