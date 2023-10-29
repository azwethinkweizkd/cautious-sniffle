type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let todos: Todo[] = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
];

export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  const todo: Todo = {
    id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
    text,
    completed: false,
  };
  todos.push(todo);
}

export function removeTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
  todos = [];
}
