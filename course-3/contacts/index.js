import { append, read, remove } from './storage.js';

export function init() {
  document.getElementById('form-add').addEventListener('submit', onSubmitAdd);
  document.getElementById('form-delete').addEventListener('submit', onSubmitDelete);
  document.getElementById('form-delete').addEventListener('change', onChangeDelete);
  //   document.getElementById('form-delete').onsubmit = onSubmitDelete;   sau asa, fara apelul functiei,doar referinta
  render();
}

function onChangeDelete(event) {
  const { form } = event.target;
  // const form = event.target.form;
  const data = new FormData(form); // sau event.currentTarget
  const hasChecked = data.getAll('id').length > 0;
  form.elements.delete.disabled = !hasChecked;
}

function onSubmitAdd(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  data.set('id', Date.now());
  const contact = Object.fromEntries(data);
  append(contact);
  render();
}

function onSubmitDelete(event) {
  event.preventDefault(); //altfel face refresh

  const form = event.target; // se refera la listenerul de event, adica in cazul asta formul de delete
  const data = new FormData(form);
  const contacts = read();
  data.getAll('id').forEach(id => {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      remove(contact);
    }
  });
  render();
}

function render() {
  const contacts = read();
  const list = document.getElementById('list');
  const items = contacts.map(
    contact =>
      `<li>
        <label>
        <input type = "checkbox" name = "id" value = "${contact.id}" /> 
    ${contact.name} &lt;${contact.email}&gt ; (${contact.phone})
        </label>
    </li>`
  );
  list.innerHTML = items.join('');
  const formDelete = document.getElementById('form-delete');
  formDelete.hidden = contacts.length === 0;
}
