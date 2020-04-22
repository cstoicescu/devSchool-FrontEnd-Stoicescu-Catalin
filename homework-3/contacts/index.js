import { append, deleteContacts, read, replace } from './storage.js';

const deleteButton = document.getElementById('deletebutton');

export function init() {
  document.getElementById('form-add').addEventListener('submit', onSubmitAdd);
  document.getElementById('form-edit').addEventListener('submit', onSubmitDelete);
  render();
  deleteButton.disabled = true;
  addEventsDelete();
  addEventsEdit();
  addEventsCancel();
}

function onSubmitAdd(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const contact = Object.fromEntries(data);
  append(contact);
  render();
  init();
}
function addEventsDelete() {
  const inputs = document.getElementsByName('delete');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', ifChecked);
  }
}

function addEventsEdit() {
  const editbuttons = document.getElementsByName('editbutton');
  const savebutton = document.getElementsByName('savebutton');
  const cancelbutton = document.getElementsByName('cancelbutton');
  let inputs = document.querySelectorAll(
    '[name="pname"] ,[name="email_list"] , [name="phone_list"'
  );
  let contactsId = document.querySelectorAll('[name="id"]');
  let editMode = 'false';
  for (let i = 0; i < editbuttons.length; i++) {
    editbuttons[i].addEventListener('click', event => {
      if (editMode === 'false') {
        editMode = 'true';
        savebutton[i].hidden = false;
        cancelbutton[i].hidden = false;
        editbuttons[i].hidden = true;
        editbuttons[i].disabled = true;
        inputs[i * 3].setAttribute(
          'style',
          'background-color: #ffff38; color:#E32636; font-weight:bold'
        );
        inputs[i * 3 + 1].setAttribute(
          'style',
          'background-color: #ffff38; color:#E32636; font-weight:bold'
        );
        inputs[i * 3 + 2].setAttribute(
          'style',
          'background-color: #ffff38; color:#E32636; font-weight:bold'
        );
        // inputs[i * 3 + 1].setAttribute('readonly');
        // inputs[i * 3 + 2].setAttribute('readonly');
        inputs[i * 3].removeAttribute('readonly');
        inputs[i * 3 + 1].removeAttribute('readonly');
        inputs[i * 3 + 2].removeAttribute('readonly');
        savebutton[i].addEventListener('click', event => {
          const contact = {
            name: inputs[i * 3].value,
            email: inputs[i * 3 + 1].value,
            phone: inputs[i * 3 + 2].value,
            id: contactsId[i].value,
          };
          // console.log(contact);
          replace(contact, contactsId[i].value);
          init();
        });
      } else alert('You can edit only one entry at a time');
    });
  }
}

function addEventsCancel() {
  const cancelbutton = document.getElementsByName('cancelbutton');
  for (let i = 0; i < cancelbutton.length; i++) {
    cancelbutton[i].addEventListener('click', event => init());
  }
}

function onSubmitDelete() {
  const contact = read();
  let checkboxes = document.getElementsByName('delete');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      deleteContacts(contact[i]);
      //    console.log(contact[i]);
    }
  }
  render();
}

function render() {
  const contacts = read();
  const list = document.getElementById('list');
  const items = contacts.map(
    contact =>
      `<li>
        <fieldset>
        <i class="fas fa-id-badge"></i>
        <input  type = "checkbox" name = "delete" /> 
        <label >Name:</label>
        <input type = "text" name ='pname' value = '${contact.name}' placeholder = empty readonly>
        <label >Email:</label>
        <input type = 'text' name ='email_list' value = '${contact.email}' placeholder = empty readonly>
        <label >Phone:</label>
        <input type = 'text' name = 'phone_list' value = '${contact.phone}'  placeholder = empty readonly>
        <input type = 'text' name = 'id' value = '${contact.id}'  readonly hidden >
        <button type = "button" id='del' name ="editbutton" > Edit </button> 
        <button type = "button" name = "savebutton" hidden> Save </button> 
        <button type = "button" name = "cancelbutton" hidden> Cancel </button> 
        </fieldset>
        </li>`
  );
  list.innerHTML = items.join('');
  const formDelete = document.getElementById('form-edit');
  formDelete.hidden = contacts.length === 0;
}

export function ifChecked() {
  let checkboxes = document.getElementsByName('delete');
  let selected = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i]);
    }
  }
  if (selected.length > 0) {
    deleteButton.disabled = false;
  } else {
    deleteButton.disabled = true;
  }
  // console.log(selected);
}
