export function read() {
    const data = window.localStorage.getItem('ds-contacts');   //in local storage tinem stringuri
    return data === null ? [] : JSON.parse(data);
}

function write(contacts) {
    const data = JSON.stringify(contacts);
    window.localStorage.setItem('ds-contacts',data);
}

export function append(contact) {
    const contacts = read();
    contacts.push(contact);
    write(contacts);

}

export function deleteContacts (contactToRemove) {
    let contacts = read();
    let newContacts = contacts.filter(function(contact){
        return contact.name !== contactToRemove.name
            && contact.email !== contactToRemove.email 
            &&  contact.phone !== contactToRemove.phone
    })
    // console.log(contactToRemove.name);
    write(newContacts);
}