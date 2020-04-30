import { LitElement, html, css } from 'lit-element'; // nu mai e nevoie de pus fullpath doar shortcut pt ca se afla in node

class AppContent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 2rem;
        height: 5rem;
      }
    `;
  }

  render() {
    return html`
      <form @submit=${this._onSubmit}>
        <label class="x"
          >Please choose a year:
          <input type="number" name="year" min="2020" max="2030" placeholder=" Select year" />
        </label>
        <label class="y"
          >Please choose a title: <input type="text" name="title" placeholder=" Select title" />
        </label>
        <button>OK</button>
      </form>
    `;
  }

  _onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);
    // console.log(
    //   data,
    //   event.target,
    //   event.target.elements,
    //   event.target.elements.year,
    //   event.target.elements.year.form
    // );
    this.dispatchEvent(new CustomEvent('input-changed', { detail: data }));
  }
}

window.customElements.define('app-content', AppContent);
