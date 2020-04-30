import { LitElement, html } from 'lit-element'; // nu mai e nevoie de  fullpath doar shortcut pt ca se afla in node

import './AppHeader.js';
import './AppFooter.js';
import './AppContent.js';

// mediator patern, appmain is a mediatior for appcontent and appfooter

export class AppMain extends LitElement {
  static get properties() {
    return {
      year: { type: Number },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.year = 2020;
    this.title = 'My title';
  }

  render() {
    return html`
      <app-header title=${this.title}></app-header>
      <app-content @input-changed=${this._onInputChange}></app-content>
      <app-footer .year=${this.year}></app-footer>
    `;
  }

  _onInputChange(event) {
    console.log(event.detail);
    if (event.detail.year) {
      this.year = event.detail.year;
    }
    if (event.detail.title) {
      this.title = event.detail.title;
    }
  }
}
