import { LitElement, html, css } from 'lit-element'; // nu mai e nevoie de pus fullpath doar shortcut pt ca se afla in node

class AppFooter extends LitElement {
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
      year: { type: Number },
    };
  }
  render() {
    return html` <footer>Copyright &copy; ${this.year}</footer> `;
  }
}

window.customElements.define('app-footer', AppFooter);
