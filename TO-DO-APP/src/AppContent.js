import { LitElement, html, css } from 'lit-element';
import { append, read, remove } from './storage.js';
import './ToDoAdd.js';
import './ToDoList.js';

export class AppContent extends LitElement {
  static get properties() {
    return {
      todos: { type: Object },
      index: { type: Number },
    };
  }

  constructor() {
    super();
    this.todos = read();
  }
  static get styles() {
    return css`
      :host {
        word-wrap: break-word;
        font-family: 'Comic Sans MS', 'Comic Sans', cursive;
      }
    `;
  }
  render() {
    return html`
      <to-do-add @todo-add=${this._onAdd}></to-do-add>
      <to-do-list @todo-remove=${this._onRemove} .todos=${this.todos}></to-do-list>
    `;
  }

  _onAdd(event) {
    const todo = event.detail;
    append(todo);
    this.todos = read();
    console.log(this.todos);
  }

  _onRemove(event) {
    remove(event.detail);
    this.todos = read();
  }
}

window.customElements.define('app-content', AppContent);
