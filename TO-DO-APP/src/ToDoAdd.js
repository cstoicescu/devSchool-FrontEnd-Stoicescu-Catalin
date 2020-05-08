import { LitElement, html, css } from 'lit-element';

let myColor = css`#95b8f0`;

export class ToDoAdd extends LitElement {
  static get styles() {
    return css`
      select[name='importance'],
      option {
        font-family: 'Comic Sans MS', 'Comic Sans', cursive;
        background-color: ${myColor};
        font-weight: bold;
      }
      :host {
        text-align: center;
      }

      button:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
          inset 2px 2px 3px rgba(0, 0, 0, 0.6);
      }

      input {
        background-color: #95b8f0;
      }
      button {
        background-color: #009688;
        border: 0;
        border-radius: 8px;
        font-size: 0.9rem;
      }
      button:hover {
        background-color: #95b8f0;
      }
      form {
        margin-top: 20px;
        padding: 2rem;
        border-style: ridge;
        border-color: #dfb8ff;
        text-align: center;
        background-color: #dfb8ff;
        margin-left: 30%;
        margin-right: 30%;
      }
      input {
        margin-bottom: 20px;
      }
    `;
  }

  render() {
    return html`
      <form @submit=${this._onSubmitAdd}>
        <label class="add">
          Please add a to do:
          <input type="text" name="todo" required minlength="2" placeholder="Add something to do" />
        </label>
        <div>
          <label>Please select the importance: </label>
          <select @change=${this._onChange} name="importance" required>
            <option value="" selected disabled hidden>Choose here</option>
            <option style="background-color:#fc4747" value="ASAP">ASAP</option>
            >
            <option style="background-color:#fcae42;" value="high">High</option>
            <option style="background-color:#fffb40;" value="medium">Medium</option>
            <option style="background-color:#40ff80;" value="low">Low</option>
          </select>
          <button>Add</button>
        </div>
      </form>
    `;
  }

  _onChange(event) {
    const importance = event.target.value;
    switch (importance) {
      case 'ASAP': {
        event.target.style.backgroundColor = '#fc4747';
        break;
      }
      case 'high': {
        event.target.style.backgroundColor = '#fcae42';
        break;
      }
      case 'medium': {
        event.target.style.backgroundColor = '#fffb40';
        break;
      }
      case 'low': {
        event.target.style.backgroundColor = '#40ff80';
        break;
      }
    }
  }

  _onSubmitAdd(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    fd.set('id', Date.now().toString());
    const data = Object.fromEntries(fd);
    // console.log(event.target.elements.todo, fd, data);
    // append(data);
    // console.log(event.target.elements.importance.value);
    this.dispatchEvent(new CustomEvent('todo-add', { detail: data }));
  }
}

window.customElements.define('to-do-add', ToDoAdd);
