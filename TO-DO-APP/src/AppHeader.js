import { LitElement, html, css } from 'lit-element';

export class AppHeader extends LitElement {
  static get styles() {
    return css`
      header {
        background: dodgerblue;
        color: white;
        padding: 2rem;
      }
    `;
  }

  render() {
    return html` <header>TO-DO App</header>`;
  }
}

window.customElements.define('app-header', AppHeader);
