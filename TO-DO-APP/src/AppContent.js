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
      div {
        min-height: 400px;
        margin-bottom: 2rem;
        clear: both;
        display: flex;
      }

      .legend {
        flex: 1;
        background-color: #95b8f0;
        height: fit-content;
        min-width: 200px;
        max-width: 250px;
        position: sticky;
        top: 60px;
        text-align: center;
      }
      to-do-list {
        flex: 1;
        max-width: 80%;
        min-width: 80%;
      }
      .ASAP {
        background-color: #fc4747;
        padding-left: 50px;
        margin-left: -100px;
        margin-right: 15px;
      }

      .High {
        background-color: #fcae42;
        padding-left: 50px;
        margin-left: -108px;
        margin-right: 15px;
      }

      .Medium {
        background-color: #fffb40;
        padding-left: 50px;
        margin-left: -85px;
        margin-right: 15px;
      }
      .Low {
        background-color: #40ff80;
        padding-left: 50px;
        margin-left: -115px;
        margin-right: 15px;
      }
      dd {
        margin-bottom: 10px;
      }
    `;
  }
  render() {
    return html`
      <to-do-add @todo-add=${this._onAdd}></to-do-add>
      <div>
        <to-do-list @todo-remove=${this._onRemove} .todos=${this.todos}></to-do-list>
        <dl class="legend">
          <dt>Importance:</dt>
          <dd><span class="ASAP"></span>ASAP</dd>
          <dd><span class="High"></span> High</dd>
          <dd><span class="Medium"></span> Medium</dd>
          <dd><span class="Low"></span> Low</dd>
        </dl>
      </div>
    `;
  }

  _onAdd(event) {
    const todo = event.detail;
    append(todo);
    this.getElementById;
    this.todos = read();
  }

  _onRemove(event) {
    remove(event.detail);
    this.todos = read();
  }
}

window.customElements.define('app-content', AppContent);
