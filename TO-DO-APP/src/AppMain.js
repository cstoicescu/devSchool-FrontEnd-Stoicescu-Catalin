import { LitElement, html } from 'lit-element';

import './AppHeader.js';
import './AppContent.js';
import './AppFooter.js';

export class AppMain extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <app-content></app-content>
      <app-footer></app-footer>
    `;
  }
}
