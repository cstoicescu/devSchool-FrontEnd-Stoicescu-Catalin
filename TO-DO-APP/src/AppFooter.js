import { LitElement, html } from 'lit-element';

export class AppFooter extends LitElement {
  static get properties() {
    return {
      year: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.year = 2020;
  }
  render() {
    return html` <footer>Copyright &copy; ${this.year}</footer> `;
  }
}

window.customElements.define('app-footer', AppFooter);
