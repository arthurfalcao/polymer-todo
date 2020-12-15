import { PolymerElement, html } from "@polymer/polymer";
import '@polymer/polymer/lib/elements/dom-repeat.js';

import './todo-item'

class ListItems extends PolymerElement {
  static get properties() {
    return {
      todoList: {
        type: Array,
        value: []
      },
    };
  }

  static get template() {
    return html`
      <ul>
        <template is="dom-repeat" items="{{todoList}}">
          <todo-item todo-item="{{item}}"></todo-item>
        </template>
      </ul>
    `;
  }
}

window.customElements.define("list-items", ListItems);
