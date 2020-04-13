const main = {
    users : [],  // definire ---    cheie : valoare

    error: "",

    async init() {
        console.log('hello', document.getElementById('list'));
        const users = await this.fetchUsers();
        if(users) {
            this.users = users;
            this.render();
        }   else {
             this.error = 'An error has occurred';
        }
        this.render();
    },
    async fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok)  {    // daca response are proprietate ok
             const data = response.json();
             return data;
        }
        return null;
    },

    render(){ 
        if(this.error) {
            document.getElementById('error').textContent = this.error;
        }
        else {
            const items = this.users.map(users => `<li> ${users.name} ${users.email}</li>`);
            const list = document.getElementById('list');
            list.innerHTML = items.join('');
        }
    }

};
    
     // apelare


    // init:() => {};
    // init: function() {};
    // echivalente cu init()
