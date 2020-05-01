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
    };
  }

  render() {
    const data = read();
    this.myArray = Object.values(data);
    return html` <p>To-Do List</p>
      <ol>
        ${this.myArray.map(i => html`<to-do-element todo=${i.todo} id=${i.id}></to-do-element>`)}
      </ol>`;
  }
}

window.customElements.define('to-do-list', ToDoList);
