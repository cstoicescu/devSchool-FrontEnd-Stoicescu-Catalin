import { LitElement, html, css } from 'lit-element';
export class ToDoElement extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 0.2rem;
        margin: 0.5rem;
        border-radius: 0.3rem;
      }
      span {
        font-size: 0.65rem;
      }
    `;
  }
  static get properties() {
    return {
      todo: {
        type: String,
      },
      id: { type: String },
      importance: { type: String },
    };
  }

  render() {
    if (this.importance === 'ASAP') this.style.backgroundColor = '#fc4747';
    if (this.importance === 'high') this.style.backgroundColor = '#fcae42';
    if (this.importance === 'medium') this.style.backgroundColor = '#fffb40';
    if (this.importance === 'low') this.style.backgroundColor = '#40ff80';
    return html` ${this.todo} &nbsp;&nbsp;&nbsp; <span>(Importance: ${this.importance})</span>`;
  }
}

window.customElements.define('to-do-element', ToDoElement);
