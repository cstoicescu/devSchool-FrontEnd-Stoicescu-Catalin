import { LitElement, html, css } from 'lit-element';

export class AppHeader extends LitElement {
  static get styles() {
    return css`
      header {
        position: relative;
        left: 0;
        text-align: center;
        background: mediumseagreen;
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
