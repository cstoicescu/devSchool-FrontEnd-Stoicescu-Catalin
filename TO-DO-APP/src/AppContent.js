import { LitElement, html, css } from 'lit-element';

import './ToDoAdd.js';
import './ToDoList.js';

export class AppContent extends LitElement {
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
      <to-do-add class="x"></to-do-add>
      <to-do-list></to-do-list>
    `;
  }
}

window.customElements.define('app-content', AppContent);
