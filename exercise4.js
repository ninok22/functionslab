fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoCompleted = json.reduce((acc,todo) => 
     todo.completed ? acc+1 : acc,0)
     console.log(todoCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });