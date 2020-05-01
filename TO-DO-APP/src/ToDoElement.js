import { LitElement, html } from 'lit-element';
import { remove } from './storage.js';
export class ToDoElement extends LitElement {
  static get properties() {
    return {
      todo: {
        type: String,
      },
      id: { type: String },
    };
  }

  render() {
    return html`<li>
      ${this.todo}
      <button @click=${() => remove(this.id)}>Remove</button>
    </li> `;
  }
}

window.customElements.define('to-do-element', ToDoElement);
