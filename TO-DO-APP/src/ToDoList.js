import { LitElement, html } from 'lit-element';

export class ToDoList extends LitElement {
  render() {
    return html` hello `;
  }
}

window.customElements.define('to-do-list', ToDoList);
