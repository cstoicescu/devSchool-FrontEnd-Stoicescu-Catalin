import { LitElement, html } from 'lit-element';

export class AppHeader extends LitElement {
  static get styles() {}

  render() {
    return html` <header>TO-DO App</header>`;
  }
}

window.customElements.define('app-header', AppHeader);
