import { LitElement, html } from 'lit-element';
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
    return html`<p>
      ${this.todo}
      <button @click=${this._onRemove}>Remove</button>
    </p> `;
  }

  _onRemove(event) {
    this.dispatchEvent(new CustomEvent('todo-remove', { detail: this.id }));
  }
}

window.customElements.define('to-do-element', ToDoElement);
