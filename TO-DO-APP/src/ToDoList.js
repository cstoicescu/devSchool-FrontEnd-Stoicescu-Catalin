import { LitElement, html } from 'lit-element';
import { read } from './storage.js';
import './ToDoElement.js';
export class ToDoList extends LitElement {
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
            html`<to-do-element
              @todo-remove=${this._onRemove}
              .todo=${i.todo}
              .id=${i.id}
            ></to-do-element>`
        )}
      </div>`;
  }

  _onRemove(event) {
    this.dispatchEvent(new CustomEvent('todo-remove', { detail: event.detail }));
  }
}

window.customElements.define('to-do-list', ToDoList);
