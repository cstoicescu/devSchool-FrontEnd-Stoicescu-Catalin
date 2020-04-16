export function read() {
  const data = window.localStorage.getItem('ds-contacts'); //in local storage tinem stringuri
  return data === null ? [] : JSON.parse(data);
}

function write(contacts) {
  const data = JSON.stringify(contacts);
  window.localStorage.setItem('ds-contacts', data);
}

export function remove(contact) {
  const contacts = read();

  const index = contacts.findIndex(element => element.id === contact.id);
  if (index !== -1)
    //verificam daca se gaseste, returneaza -1 daca nu a fost gasit.
    contacts.splice(index, 1);
  write(contacts);
}

export function append(contact) {
  const contacts = read();
  contacts.push(contact);
  write(contacts);
}
