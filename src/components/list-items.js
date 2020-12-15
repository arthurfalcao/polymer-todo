import '@polymer/polymer/lib/elements/dom-repeat.js';
import { PolymerElement, html } from "@polymer/polymer";

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
          <li>{{item.item}}</li>
        </template>
      </ul>
    `;
  }
}

window.customElements.define("list-items", ListItems);
