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
        padding: 1rem;
      }
    `;
  }
  static get properties() {
    return {
      latitude: { type: Object },
      longitude: { type: Object },
      location: { type: Object },
      options: { type: Object },
    };
  }
  constructor() {
    super();
    this.getLocation();
    this.options = {
      enableHighAccuracy: true,
    };
  }

  render() {
    return html` <header>
      <p>TO-DO App</p>

      <p>${this.location.display_name}</p>
    </header>`;
  }
  async getLocation() {
    navigator.geolocation.getCurrentPosition(
      async position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.location = await this.reverseApi();
        console.log(this.location);
      },
      error => {
        console.warn(error.code);
      },
      options => {
        this.options;
      }
    );
  }
  async reverseApi() {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${this.latitude}&lon=${this.longitude}&format=json`
    );

    if (response.ok) {
      const data = response.json();
      return data;
    }
    return null;
  }
}

window.customElements.define('app-header', AppHeader);
