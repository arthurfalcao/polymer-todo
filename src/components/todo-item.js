import { PolymerElement, html } from '@polymer/polymer';

class TodoItem extends PolymerElement {
  static get properties() {
    return {
      todoItem: {
        type: Object,
        value: {}
      }
    }
  }

  static get template() {
    return html`<li>{{todoItem.item}}</li>`;
  }
}

window.customElements.define("todo-item", TodoItem);
