import { LitElement, html } from 'lit-element';

import './ToDoAdd.js';
import './ToDoList.js';

export class AppContent extends LitElement {
  render() {
    return html` <to-do-add></to-do-add>
      <to-do-list></to-do-list>`;
  }
}

window.customElements.define('app-content', AppContent);
