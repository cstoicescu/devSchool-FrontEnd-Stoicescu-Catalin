import { append ,deleteContacts, read} from './storage.js';

const deleteButton = document.getElementById('deletebutton');

export function init() {
    window.addEventListener('DOMContentLoaded',onLoad);
}

function onLoad() {
    document.getElementById('form-add').addEventListener('submit',onSubmitAdd)
    document.getElementById('form-delete').addEventListener('submit',onSubmitDelete)
    render()
    deleteButton.hidden = true;
    addEvents();
}

function onSubmitAdd(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const contact = Object.fromEntries(data);
    append(contact);
    render();
    onLoad();

}
    function addEvents() {
    const inputs = document.getElementsByName('delete')
    for( let i = 0 ; i < inputs.length; i++) {
        inputs[i].addEventListener("click",ifChecked);
        }
}

function onSubmitDelete(event) {
    event.preventDefault();
    const contact = read();
    var checkboxes = document.getElementsByName('delete');
    for( let i = 0; i < checkboxes.length; i++) {
        if( checkboxes[i].checked)
        {   
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
        <input  type = "checkbox" name = "delete" /> 
    Name: ${contact.name} &nbsp;&nbsp;||&nbsp; Email: ${contact.email} &nbsp;&nbsp;||&nbsp; Phone Number: 
    (${contact.phone}) </li>`);
    list.innerHTML = items.join('');
    const formDelete = document.getElementById('form-delete');
    formDelete.hidden = contacts.length === 0;
    } 
    
    export function ifChecked(){
    var checkboxes = document.getElementsByName('delete');
    var selected = [];
    for( let i = 0; i < checkboxes.length; i++) {
        if( checkboxes[i].checked)
        {   
            selected.push(checkboxes[i]);
        }
    }
        if(selected.length > 0 ) {
         deleteButton.hidden = false;
        }
        else {
            deleteButton.hidden = true;
        }
        // console.log(selected);
}
  