import { LitElement, html } from 'lit-element';
import { append } from './storage';
export class ToDoAdd extends LitElement {
  render() {
    return html`
      <form @submit=${this._onSubmitAdd}>
        <label class="add"
          >Add a To Do
          <input type="text" name="todo" required minlength="2" placeholder="Add something to do" />
        </label>
        <button>Add</button>
      </form>
    `;
  }

  _onSubmitAdd(event) {
    const fd = new FormData(event.target);
    fd.set('id', Date.now().toString());
    const data = Object.fromEntries(fd);
    // console.log(event.target.elements.todo, fd, data);
    append(data);
  }
}

window.customElements.define('to-do-add', ToDoAdd);
