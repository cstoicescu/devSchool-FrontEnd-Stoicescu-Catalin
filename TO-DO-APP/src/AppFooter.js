import { LitElement, html, css } from 'lit-element';

export class AppFooter extends LitElement {
  static get styles() {
    return css`
      footer {
        background: mediumseagreen;
        color: white;
        padding: 2rem;
      }
    `;
  }

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
