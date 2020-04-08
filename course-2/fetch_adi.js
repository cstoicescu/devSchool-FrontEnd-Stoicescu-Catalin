// Getting all resources:
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json));

// Getting a specific resource:
fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(json => console.log(json));

// Getting some resources based on filtering:
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(json => console.log(json));

// Creating a new resource:
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(json => console.log(json));

// Updating an existing resource:
fetch('https://jsonplaceholder.typicode.com/posts/2', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json));

// Partially updating an existing resource:
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo',
  }),
})
  .then(response => response.json())
  .then(json => console.log(json));

// Deleting a specific resource:
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
