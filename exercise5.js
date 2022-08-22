fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoCompletedByUser = json.reduce((acc, todo) => {
     
     //condition to test ? value if rue : value of false
      todo.completed ? acc : acc.push ({ userId: todo.userId, title: todo.title })
     return acc; }, []);
     console.log(todoCompletedByUser);
   })
  .catch(function(err) { 
    console.log(err);
  });
  
 