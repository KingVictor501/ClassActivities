// filter the to-dos for incomplete tasks
let todos = data.filter(task => task.completed !== true);
console.log(todos);

// filter for user 6's tasks
let user6tasks = data.filter(item => item.userId === 6);
console.log(user6tasks);

// filter for user 6's completed tasks
let user6CompletedTasks = user6tasks.filter(task => task.completed == true);
console.log(user6CompletedTasks);

// filter for tasks with a title less than 24 characters long
let shortTitle = data.filter(curr => curr.title.length < 24);
console.log(shortTitle);