import { LitElement, html } from 'lit-element';

export class ToDoAdd extends LitElement {
  render() {
    return html`
      <form>
        <label class="add"
          >Add a To Do
          <input
            type="text"
            name="to-do"
            required
            minlength="2"
            placeholder="Add something to do"
          />
        </label>
        <button>Add</button>
      </form>
    `;
  }
}

window.customElements.define('to-do-add', ToDoAdd);
