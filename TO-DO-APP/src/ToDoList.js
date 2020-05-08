import { LitElement, html, css } from 'lit-element';
import './ToDoElement.js';
export class ToDoList extends LitElement {
  static get styles() {
    return css`
      button:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
          inset 2px 2px 3px rgba(0, 0, 0, 0.6);
      }

      button {
        background-color: #009688;
        border: 0;
        border-radius: 8px;
        font-size: 0.9rem;
      }
      button:hover {
        background-color: #95b8f0;
      }
    `;
  }
  static get properties() {
    return {
      myArray: {
        type: Array,
      },
      todo: { type: String },
      id: { type: String },
      todos: { type: Object },
    };
  }

  render() {
    this.myArray = Object.values(this.todos);
    return html` <p>To-Do List</p>
      <div>
        ${this.myArray.map(
          i =>
            html`<p>
              <to-do-element .todo=${i.todo} .id=${i.id} .importance=${i.importance}>
              </to-do-element>
              <button @click=${this._onRemove} name="${i.id}">Remove</button>
            </p>`
        )}
      </div>`;
  }

  _onRemove(event) {
    // console.log(event.target.name);
    const id = event.target.name;
    this.dispatchEvent(new CustomEvent('todo-remove', { detail: id }));
  }
}

window.customElements.define('to-do-list', ToDoList);
